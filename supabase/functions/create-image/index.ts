// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const createImage = async (prompt: string, substance: string) => {
  const response = await fetch(
    `https://api.openai.com/v1/images/generations`,
    {
      body: JSON.stringify({
        prompt: `${substance} journey ${prompt}`,
        model: "dall-e-3",
        n: 1,
        size: "1024x1024",
      }),
      headers: {
        Authorization: `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );
  if (!response.ok) {
    const res = await response.json();
    console.error("Error response from OpenAI:", res);
    throw new Error(`HTTP error! status: ${response}`);
  }
  return response.json()
}

serve(async (req) => {
  const { method } = req
  if (method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  const reqData = await req.json()
  console.log("Here: ", reqData);
  try {
    const response = await createImage(reqData.prompt, reqData.substance)
    console.log("response: ", response)
    return new Response(JSON.stringify(response.data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
