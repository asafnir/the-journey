import React from "react";
import MainLayout from "layouts/MainLayout"

const Create = () => {
  return (
    <MainLayout>
      <div className="pb-16 pt-10">
        <p className="text-4xl text-white text-center"><b>Your Journey</b><br/>Capturing Memories of Self-Discovery</p>
      </div>
      <div className="w-full">
        <div className="max-w-3xl m-auto">
          <div className="mb-10">
            <label className="block text-2xl font-medium ">Title</label>
            <div className="mt-1">
              <input id="about" name="about" className="p-2 mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="I was in the ocean when ..."></input>
            </div>
          </div>
          <div className="mb-10">
            <label className="block text-2xl font-medium ">The important pieces of your journey</label>
            <div className="mt-1">
              <textarea id="about" name="about" rows="2" className="mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="I was in the ocean when ..."></textarea>
            </div>
            <p className="mt-2 text-sm">Brief description about your exprince we will use this to generate the image</p>
          </div>
          <div>
            <label for="about" className="block text-2xl font-medium ">Write a descriptipon of your journey</label>
            <div className="mt-1">
              <textarea id="about" name="about" rows="4" className="mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="I was in the ocean when ..."></textarea>
            </div>
            <p className="mt-2 text-sm">Fulll description about your exprince</p>
          </div>
          <div className="mt-5">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Create</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Create;
