import React from "react";
import { MdInvertColors } from "react-icons/md";
import { FaRegFaceLaughBeam } from "react-icons/fa6";

const ButtonShowcase = () => {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-10 dark:bg-gray-900 dark:text-gray-100">
      <section>
        <h1 className="text-xl font-semibold ">Button Showcase </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Colors , Border , Hover , Focus , Disabled , Loading , Dark Mode
        </p>
        <hr />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1) Base Button</h2>
        <div className="space-y-2">
          <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white">
            Base Button
          </button>
          <br />
          <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border">
            inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm
            font-medium bg-gray-200 text-gray-900 dark:bg-gray-800
            dark:text-white
          </code>
        </div>
        <hr />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2) Color Varient</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-700">
            Solid Red
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-yellow-500 text-white hover:bg-yellow-700">
            Solid Yellow
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-orange-500 text-white hover:bg-orange-700">
            Solid Orange
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-500 text-white hover:bg-green-700">
            Solid Green
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-teal-500 text-white hover:bg-teal-700">
            Solid Teal
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-500 text-white hover:bg-blue-700">
            Solid Blue
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-700">
            Solid Indigo
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-500 text-white hover:bg-purple-700">
            Solid Purple
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-pink-500 text-white hover:bg-pink-700">
            Solid Pink
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white border text-black hover:bg-black hover:text-white">
            Solid White
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-500 text-white hover:bg-gray-700">
            Solid Gray / Netural
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-black border text-white hover:bg-white hover:text-black">
            Solid Black
          </button>
          <button className="px-4 py-4 rounded-lg text-sm font-medium border-2 border-gray-500 text-gray-900">
            Outline
          </button>
          <button className="px-4 py-4 rounded-lg text-sm font-medium border-2 border-dashed border-gray-500 text-gray-900">
            Dashed Outline
          </button>
        </div>
        <hr />
      </section>

      {/* npm install react-icons in Terminal Where You were executing the WebApp */}
      {/* import { MdInvertColors } from "react-icons/md"; at the top below import react*/}
      {/* Re initailze your webapp using npm run dev  */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3) Icon Buttons</h2>
        <div className="space-x-2">
          <button className="w-12 h-12 border-2 border-gray-700 bg-gray-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-gray-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-red-700 bg-red-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-red-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-yellow-700 bg-yellow-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-yellow-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-orange-700 bg-orange-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-orange-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-green-700 bg-green-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-green-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-teal-700 bg-teal-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-teal-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-blue-700 bg-blue-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-blue-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-indigo-700 bg-indigo-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-indigo-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-purple-700 bg-purple-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-purple-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-pink-700 bg-pink-200 rounded-full inline-flex inline-flex items-center justify-center">
            <MdInvertColors className="text-pink-500 text-[30px]" />
          </button>
        </div>
        <div className="space-x-2">
          <button className="w-12 h-12 border-2 border-gray-700 bg-gray-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-gray-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-red-700 bg-red-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-red-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-yellow-700 bg-yellow-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-yellow-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-orange-700 bg-orange-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-orange-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-green-700 bg-green-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-green-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-teal-700 bg-teal-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-teal-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-blue-700 bg-blue-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-blue-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-indigo-700 bg-indigo-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-indigo-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-purple-700 bg-purple-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-purple-500 text-[30px]" />
          </button>
          <button className="w-12 h-12 border-2 border-pink-700 bg-pink-200 rounded-full inline-flex inline-flex items-center justify-center">
            <FaRegFaceLaughBeam className="text-pink-500 text-[30px]" />
          </button>
        </div>
        <hr />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4) Border & Radius</h2>
        <div className="flex flex-wrap gap-3 space-x-2">
          <button className="px-4 py-2 rounded text-sm font-medium border text-red-900 dark:text-white">
            Border
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-2 text-yellow-900 dark:text-white">
            Border - 2
          </button>
          <button className="px-4 py-2 rounded-xs text-sm font-medium border-2 text-orange-900 dark:text-white">
            Rounded - xs
          </button>
          <button className="px-4 py-2 rounded-md text-sm font-medium border-2 text-green-900 dark:text-white">
            Rounded - md
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-medium border-2 text-teal-900 dark:text-white">
            Rounded - xl
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium border-2 text-blue-900 dark:text-white">
            Rounded - full
          </button>
        </div>
        <div className="flex flex-wrap gap-3 space-x-2">
          <button className="px-4 py-2 rounded text-sm font-medium border border-dashed text-red-900 dark:text-white">
            Border
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-2 border-dashed text-yellow-900 dark:text-white">
            Border - 2
          </button>
          <button className="px-4 py-2 rounded-xs text-sm font-medium border-2 border-dashed text-orange-900 dark:text-white">
            Rounded - xs
          </button>
          <button className="px-4 py-2 rounded-md text-sm font-medium border-2 border-dashed text-green-900 dark:text-white">
            Rounded - md
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-medium border-2 border-dashed text-teal-900 dark:text-white">
            Rounded - xl
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium border-2 border-dashed text-blue-900 dark:text-white">
            Rounded - full
          </button>
        </div>
        <div className="flex flex-wrap gap-3 space-x-2">
          <button className="px-4 py-2 rounded text-sm font-medium border border-dashed text-red-900 dark:text-white">
            Border
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-2 border-dashed text-yellow-900 dark:text-white">
            Border - 2
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-4 border-dashed text-orange-900 dark:text-white">
            Border - 4
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-6 border-dashed text-green-900 dark:text-white">
            Border - 6
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-8 border-dashed text-teal-900 dark:text-white">
            Border - 8
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-10 border-dashed text-blue-900 dark:text-white">
            Border - 10
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5) Hover Scaling + Color</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 border-red-500 text-red-700 hover:bg-red-500">
            Hover : BG
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 bg-yellow-300 text-orange-700 hover:bg-yellow-500 hover:text-orange-200">
            Hover : TEXT , BG
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 text-green-700 transform hover:scale-105 duration-10">
            Hover : SCALE | Duration : 10
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 text-teal-700 transform hover:scale-105 duration-100">
            Hover : SCALE | Duration : 100
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 text-blue-700 transform hover:scale-105 duration-1000">
            Hover : SCALE | Duration : 1000
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 text-indigo-700 hover:shadow-xl">
            Hover : Shadow
          </button>
        </div>
        <hr />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6)Focus</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg font-medium text-sm bg-white text-gray-900 border focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offect-2 focus:text-pink-500">
            Focus : ring - 2
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-200 text-indigo-900 border focus:outline-dashed focus:ring-2 focus:ring-indigo-500 focus:ring-offest-4 focus:bg-indigo-800 focus:text-indigo-200">
            Focus : BG +TEXT
          </button>
        </div>
        <hr />
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7)Disabled</h2>
        <div className="flex flex-wrap gap-3">
          <button
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white"
            disabled
          >
            Disabled
          </button>
          <button
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Disabled Styled
          </button>
        </div>
        <hr />
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8)Dark Mode</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white dark:bg-green-500 dark:text-white dark:hover:bg-gray-600">
            Dark + Hover
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-900 border dark:bg-gray-800 dark:text-white dark:border-gray-200 dark:border-2">
            Dark Neutral
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border border-teal-600 text-teal-700 dark:text-teal-300 dark:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-400/20">
            Outline Neutral
          </button>
        </div>
      </section>
    </main>
  );
};

export default ButtonShowcase;
