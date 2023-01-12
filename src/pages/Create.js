import React from "react";
import MainLayout from "layouts/MainLayout"

const Create = () => {
  return (
    <MainLayout>
      <div className="pb-16 pt-10">
        <p className="text-4xl text-white text-center">Creating Your Journey: Capturing Memories of Self-Discovery</p>
      </div>
      <div className="w-full">
        <div className="max-w-3xl m-auto">
          <div className="mb-10">
            <label for="about" class="block text-2xl font-medium ">Title</label>
            <div class="mt-1">
              <input id="about" name="about" class="p-2 mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="I was in the ocean when ..."></input>
            </div>
          </div>
          <div className="mb-10">
            <label for="about" class="block text-2xl font-medium ">The important pieces of your journey</label>
            <div class="mt-1">
              <textarea id="about" name="about" rows="2" class="mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="I was in the ocean when ..."></textarea>
            </div>
            <p class="mt-2 text-sm">Brief description about your exprince we will use this to generate the image</p>
          </div>
          <div>
            <label for="about" class="block text-2xl font-medium ">Write a descriptipon of your journey</label>
            <div class="mt-1">
              <textarea id="about" name="about" rows="4" class="mt-1 text-black text-xl block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="I was in the ocean when ..."></textarea>
            </div>
            <p class="mt-2 text-sm">Fulll description about your exprince</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Create;
