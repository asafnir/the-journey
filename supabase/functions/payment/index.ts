// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createOrRetrieveCustomer } from "../utils/supabase.ts";
import { stripe } from "../utils/stripe.ts";
import { corsHeaders } from '../utils/cors.ts'

serve(async (req) => {
  const { method } = req
  try {
    if (method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders })
    }
    // Get the authorization header from the request.
    // When you invoke the function via the client library it will automatically pass the authenticated user's JWT.
    const authHeader = req.headers.get("Authorization")!;

    // Retrieve the logged in user's Stripe customer ID or create a new customer object for them.
    // See ../_utils/supabase.ts for the implementation.
    const customer = await createOrRetrieveCustomer(authHeader);

    // Create an ephermeralKey so that the Stripe SDK can fetch the customer's stored payment methods.
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer },
      { apiVersion: "2022-11-15" }
    );
    // Create a PaymentIntent so that the SDK can charge the logged in customer.
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
      customer: customer,
    });

    // Return the customer details as well as teh Stripe publishable key which we have set in our secrets.
    const res = {
      stripe_pk: Deno.env.get("STRIPE_PUBLISHABLE_KEY"),
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer,
    };
    
    return new Response(JSON.stringify(res), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
