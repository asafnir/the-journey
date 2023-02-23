import { Database } from "./db_types.ts";
import { stripe } from "./stripe.ts";
// Import Supabase client
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";

// WARNING: The service role key has admin priviliges and should only be used in secure server environments!
const supabaseAdmin = createClient<Database>(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

export const createOrRetrieveCustomer = async (authHeader: string) => {
  // Get JWT from auth header
  const jwt = authHeader.replace("Bearer ", "");
  // Get the user object
  const {
    data: { user },
  } = await supabaseAdmin.auth.getUser(jwt);
  if (!user) throw new Error("No user found for JWT!");

	let metadata = user.user_metadata
	if (metadata.stripe_customer_id) {
		console.log(`Found customer id: ${metadata.stripe_customer_id}`);
		return metadata.stripe_customer_id;
	}
  // Create customer object in Stripe.
	const customer = await stripe.customers.create({
		email: user.email,
		metadata: { uid: user.id },
	});
	console.log(`New customer "${customer.id}" created for user "${user.id}"`);
	// Insert new customer into DB
	const { data, error } = await supabaseAdmin.auth.updateUser({
  	data: { stripe_customer_id: customer.id  }
	})
	return customer.id;
};