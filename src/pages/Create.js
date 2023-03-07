import React, {useState, useEffect} from "react";
import MainLayout from "layouts/MainLayout"
import { supabase } from 'lib/supabaseClient'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51Me9joAO4Tk5N3PA4IIqnbIjafbBWRci0ntLqfswDUPR6OlLx4VKydeeRpv2FdHAAELIbbEuE0TloImrS41qpqYs00bW3Fy53v");

const Create = () => {
  const [journeyData, setJourneyDate] = useState({});
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    createPaymentIntent()
  }, []);

  const createPaymentIntent = async () => {
    const { data, error } = await supabase.functions.invoke('payment', {
      body: { name: 'Functions' },
    })
    setClientSecret(data.paymentIntent)
  }
  
  const handler = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setJourneyDate({
      ...journeyData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <MainLayout>
      <div className="pb-16 pt-10">
        <p className="text-4xl text-white font-serif">Your Journey</p>
        <p className="text-2xl text-white">Capturing Memories of Self-Discovery</p>
      </div>
      <div className="w-full">
        <div className="max-w-2xl m-auto">
          <div className="mb-10">
            <label className="block text-2xl font-medium">Title</label>
            <div className="mt-1">
              <input
                onChange={handler}
                value={journeyData.title}
                id="title"
                name="title"
                className="p-2 mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="My first Ayahuasca experience"
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="block text-2xl font-medium ">The important pieces of your journey</label>
            <div className="mt-1">
              <textarea
                onChange={handler}
                value={journeyData.description}
                id="description"
                name="description"
                rows="2"
                className="mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="I was in the ocean when ..."
              />
            </div>
            <p className="mt-2 text-sm">Brief description about your exprince we will use this to generate the image</p>
          </div>
          <div className="mb-4">
            <label htmlFor="about" className="block text-2xl font-medium ">Write the full story of your journey</label>
            <div className="mt-1">
              <textarea
                onChange={handler}
                value={journeyData.story}
                id="story"
                name="story"
                rows="4"
                className="mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="I was in the ocean when ..."
              />
            </div>
            <p className="mt-2 text-sm">Fulll description about your exprince</p>
          </div>
          <label htmlFor="about" className="block text-2xl font-medium ">How much you want to contribute</label>
          <div className="inline-flex">
            <button onClick={() => setAmount(5)} className={`${amount === 5 ? 'bg-[gold]' : 'bg-white'}  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border-2`}>
              $5
            </button>
            <button onClick={() => setAmount(10)} className={`${amount === 10 ? 'bg-[gold]' : 'bg-white'}  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border-2`}>
              $10
            </button>
            <button onClick={() => setAmount(15)} className={`${amount === 15 ? 'bg-[gold]' : 'bg-white'}  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border-2`}>
              $15
            </button>
            <button onClick={() => setAmount(20)} className={`${amount === 20 ? 'bg-[gold]' : 'bg-white'}  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border-2`}>
              $20
            </button>

            <div className="relative">
              <i className="absolute block translate(0, -50%) text-black top-[23%] left-3">$</i>
              <input onChange={(e) => setAmount(e.target.value)} className="text-gray-800 font-bold py-2 px-6 border-2" placeholder="Custom price" />
            </div>
          </div>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
          <div className="mt-5">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Create</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Create;
