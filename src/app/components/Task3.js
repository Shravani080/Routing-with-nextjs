"use client";
import React, { useState } from 'react'

function Task3() {
    const [name, updateName] = useState();
    const [email, updateEmail] = useState();
    const [phoneNumber, updatePhoneNumber] = useState();
    const onSubmitForm = (e) => {
      e.preventDefault();
      const payload = { Name: name, Email: email, Number: phoneNumber };
      console.log(payload);
      updateName("");
      updateEmail("");
      updatePhoneNumber("");
    };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-green-100">
      <div className="flex flex-row items-center bg-white w-4/6 rounded-xl h-5/6">
        <div className="flex flex-col h-5/6 w-2/6 bg-blue-700 ml-3 rounded-xl">
        <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 bg-transparent pt-1 hover:text-black  cursor-pointer text-white border-white hover:bg-green-200 bg-green-100 border-2">
              1
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 1</p>
              <p className="text-white text-md">YOUR INFO</p>
            </div>
         </div>
         <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 bg-transparent pt-1 hover:text-black  cursor-pointer text-white border-white bg-green-100 hover:bg-green-200 border-2">
              2
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 2</p>
              <p className="text-white text-md">SELECT PLAN</p>
            </div>
         </div>
         <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 bg-transparent pt-1 hover:text-black  cursor-pointer text-white border-white hover:bg-green-200 bg-green-100 border-2">
              3
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 3</p>
              <p className="text-white text-md">ADD ONS</p>
            </div>
         </div>
         <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 bg-transparent pt-1 hover:text-black cursor-pointer text-white border-white hover:bg-green-200 bg-green-100 border-2">
              4
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 4</p>
              <p className="text-white text-md">SUMMERY</p>
            </div>
         </div>
        </div>
        <div className="flex flex-col justify-start items-start pl-40">
          <h1 className="text-blue-900 text-3xl font-serif font-bold">Personal info</h1>
          <p className="text-gray-500 text-base pt-10">
            Please provide your name, email address, and phone number.
          </p>
          <form onSubmit={(e) => onSubmitForm(e)}>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 text-base font-bold pt-8">
                Name
              </label>
              <input
                type="text"
                value={name}
                id="name"
                className="border border-gray-400 bg-transparent w-[20rem]  font-bold pl-10 rounded-lg h-10 outline-none"
                placeholder="e.g.Stephen King"
                onChange={(e) => updateName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 text-base font-bold pt-8">
                Email Address
              </label>
              <input
                type="text"
                value={email}
                id="email"
                className="border border-gray-400 bg-transparent w-[20rem]  font-bold pl-10 rounded-lg h-10 outline-none"
                placeholder="e.g.stephenking@lorem.com"
                onChange={(e) => updateEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="number" className="text-gray-600 text-base font-bold pt-8">
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                id="number"
                className="border border-gray-400 bg-transparent w-[20rem]  font-bold pl-10 rounded-lg h-10 outline-none"
                placeholder="e.g. +1 234 567 890"
                onChange={(e) => updatePhoneNumber(e.target.value)}
              />
            </div>
            <button type="submit" className="px-5 mt-8 ml-[13rem] self-end rounded-xl w-150 h-[3rem] bg-blue-900 border-none outline-none rounded-10 text-white  mt-50">
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Task3
