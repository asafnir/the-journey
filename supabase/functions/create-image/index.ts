// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const createImage = async (prompt: string) => {
  const response = await fetch(
    `https://api.openai.com/v1/images/generations`,
    {
      body: JSON.stringify({
        prompt: prompt,
        "n": 1,
        size: "256x256"
      }),
      headers: {
        Authorization: `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );
  return response.json()
}

serve(async (req) => {
  const { method } = req
  const { prompt } = await req.json()
  if (method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  const data = await  createImage(prompt) 
  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
