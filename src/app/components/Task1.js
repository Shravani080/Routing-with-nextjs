import React from 'react';
import {AiOutlineThunderbolt,AiOutlineMessage,AiOutlineEye } from 'react-icons/ai';
import {BiBrain } from 'react-icons/bi';

function Task1() {
  return (
    <div className="flex column justify-center items-center h-screen w-screen bg-white">
    <div className="flex row justify-center items-center">
    <div className="flex flex-col justify-center items-center" >
      <div className="bg-indigo-700 flex flex-col rounded-xl justify-center items-center mt-32 ml-54 h-96 w-72">
        <div className="text-blue-100 pb-5 pt-20">
          <b> Your Results</b>
        </div>
        <div className="flex flex-col items-center w-2/5 font-base text-base p-4 mt-1 bg-blue-800 rounded-full">
          <span className="text-grey-100 text-2xl p-4 text-white"> 76 </span>
          <span className='text-indigo-400'>of 100</span>
        </div>
        <div className="text-gray-100 text-3xl p-4">Great</div>
        <div className="pt-3 pb-20 text-sm items-center text-center text-indigo-300">
          <p>you scored higher than 60% of the people who have taken these tests</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center mt-32 ml-54 h-96 w-72 rounded-xl bg-white transition duration-300 drop-shadow-2xl">
            <h3 className="self-start font-bold pl-3 pb-3 text-lg">Summery</h3>
            <div className="flex flex-row justify-between m-2 bg-pink-50 p-1">
                <AiOutlineThunderbolt className="text-rose-500 pr-30 text-2xl pt-1" />
                <p className="text-rose-500 w-48 h-8 pl-3">Reaction</p>
                <p  className="text-gray-800"><b>80</b><span className="text-gray-600">/100</span></p>
            </div>
            <div className="flex flex-row justify-center m-2 bg-yellow-50 p-1">
                <BiBrain className="text-yellow-400 pr-30 text-2xl pt-1" />
                <p className="text-yellow-400 w-48 h-8 pl-3">Memory</p>
                <p  className="text-gray-800"><b>92</b><span className="text-gray-600">/100</span></p>
            </div>
            <div className="flex flex-row justify-center m-2 bg-teal-50 p-1">
                <AiOutlineMessage slassName="text-green-500 pr-30 text-2xl pt-1" />
                <p className="text-green-500 w-48 h-8 pl-3" >verbal</p>
                <p  className="text-gray-800"><b>61</b><span className="text-gray-600">/100</span></p>
            </div>
            <div className="flex flex-row justify-center m-2 bg-purple-100 p-1">
                <AiOutlineEye className="text-indigo-700 pr-30 text-2xl pt-1" />
                <p className="text-indigo-700 w-48 h-8 pl-3">visuals</p>
                <p  className="text-gray-800"><b>72</b><span className="text-gray-600">/100</span></p>
            </div>
            <button className="bg-slate-700 text-white p-2 rounded-lg w-44 mt-7 ">Continue</button>
        </div>
    </div>
  </div>
  )
}
export default Task1;
