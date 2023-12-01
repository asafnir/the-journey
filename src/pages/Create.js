import React, {useState, useEffect, Fragment} from "react";
import MainLayout from "layouts/MainLayout"
import { supabase } from 'lib/supabaseClient'
import { loadStripe } from "@stripe/stripe-js";
import HexagonLoading from "components/HexagonLoading";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51Me9joAO4Tk5N3PA4IIqnbIjafbBWRci0ntLqfswDUPR6OlLx4VKydeeRpv2FdHAAELIbbEuE0TloImrS41qpqYs00bW3Fy53v");
const substances = [
  "LSD", // Lysergic Acid Diethylamide
  "Psilocybin", // Magic Mushrooms
  "MDMA", // Methylenedioxymethamphetamine, Ecstasy
  "DMT", // Dimethyltryptamine
  "Mescaline", // Peyote, San Pedro Cacti
  "2C-B", // 2,5-Dimethoxy-4-bromophenethylamine
  "Ayahuasca", // DMT containing brew
  "Salvia Divinorum", // Salvinorin A
  "Ketamine", // Dissociative anesthetic with psychedelic effects
  "Ibogaine" // Found in Tabernanthe Iboga
];
const Create = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [errorMessage, setErrorMessage] = useState("");
  const [journeyData, setJourneyDate] = useState({
    title: "",
    substance: null,
    description: "",
  });
  const [clientSecret, setClientSecret] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [success,setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // createPaymentIntent()
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

  const createImage = async () => {
    const { title, description, substance } = journeyData
      // Reset error message at the start
    setErrorMessage("");
    if (!substance) {
      setErrorMessage("Please select a substance.");
      return;
    }
    // Validation checks
    if (!title.trim()) {
      setErrorMessage("Title cannot be empty.");
      return;
    }
    if (!description.trim()) {
      setErrorMessage("Description cannot be empty.");
      return;
    }
    setIsLoading(true)
    const { data, error } = await supabase.functions.invoke('create-image', {
      body: { prompt: description, substance },
    })
    console.log(data);
    if (error) return setIsLoading(false)
    setImage(data[0].url)
    setSuccess(true)
  }
  return (
    <MainLayout>
      {success ?
        <div className="flex gap-24 justify-center">
          <img className="w-1/3" src={image}/>
          <div className="">
            <p className="text-4xl text-white font-serif mb-4">{journeyData.title}</p>
            <span className="bg-white p-2 text-brown rounded-xl font-bold">{journeyData.substance}</span>
            <p className="text-xl text-white mt-4">{journeyData.description}</p>
          </div>
        </div>
        :
        <div>
          <div className="pb-16 pt-10 text-center">
            <p className="text-4xl text-white font-serif">Your Journey</p>
            <p className="text-2xl text-white">Capturing Memories of Self-Discovery</p>
          </div>
          {isLoading ?
            <div className="w-full justify-center items-center flex">
              <HexagonLoading loading={isLoading} />
            </div>
            :
            <div className="w-full">
              <div className="max-w-2xl m-auto">
                <div className="mb-10 w-full">
                  <label className="block text-2xl font-medium">Substance</label>
                  <Listbox value={journeyData.substance} onChange={(v)=>  setJourneyDate({...journeyData,substance: v})}>
                    <div className="relative mt-1">
                      <Listbox.Button className="w-full relative cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                        <span className="block truncate text-black text-xl">{journeyData.substance ?? "Select the substance"}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 fill-black"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {substances.map((substance, substanceIdx) => (
                            <Listbox.Option
                              key={substanceIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 w-auto text-black ${active ? "bg-amber" : "text-black"
                                }`
                              }
                              value={substance}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate text-black ${selected ? 'font-medium' : 'font-normal'
                                      }`}
                                  >
                                    {substance}
                                  </span>
                                  {substance === journeyData.substance ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber">
                                      <CheckIcon className="h-5 w-5 text-black fill-black" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
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
                <div className="mb-4">
                  <label className="block text-2xl font-medium ">The important pieces of your journey</label>
                  <div className="mt-1">
                    <textarea
                      onChange={handler}
                      value={journeyData.description}
                      id="description"
                      name="description"
                      rows="4"
                      className="mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="I was in the ocean when ..."
                    />
                  </div>
                  <p className="mt-2 text-sm">Brief description about your exprince we will use this to generate the image</p>
                </div>
                {/* <div className="mb-4">
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
                </div> */}
                {/* <label htmlFor="about" className="block text-2xl font-medium ">How much you want to contribute</label>
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
                </div> */}
                {/* {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              )} */}
                {errorMessage && <p className="text-red mb-2">{errorMessage}</p>}
                <div className="">
                  <button onClick={() => createImage()} className="bg-white hover:bg-gray-100 text-brown font-semibold py-3 px-4 border border-gray-400 rounded-lg shadow w-1/3 text-lg">Create</button>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </MainLayout>
  );
}

export default Create;
