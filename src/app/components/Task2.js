import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Task2() {
  return (
    <div className="flex justify-center items-center bg-f3eae3 h-screen bg-white">
    <div className="flex flex-col justify-center items-center mt-10 mx-[250px] w-screen h-screen font-roboto">
      <div className="flex justify-center items-center h-3/6 w-3/6 bg-white rounded-2xl drop-shadow-2xl">
        <img className="h-full w-3/6 rounded-tl-10 rounded-bl-10 " src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt='Imag' />

        <div className="pl-3 pt-36 flex flex-col bg-white h-3/6 w-3/6 self-start justify-center ">
          <div className="text-gray-500 text-lg" style={{padding: `2em`}}>
            P E R F U M E
          </div>
          <div className="text-gray-700 mt-4 font-serif">
            <b>Gabrielle<br /> Essence Eau<br /> De Parfume</b>
          </div>
          <div className="text-gray-500 mt-4 text-sm">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL
          </div>
          <div className="text-green-600 text-lg mt-4 font-serif">
            <b>$149.99</b> <span className="line-through text-xs pl-4 text-gray-400">$169.99</span>
          </div>
          <div className="flex flex-row justify-center items-center w-48 h-8 text-white bg-green-600 mt-4 rounded-2xl self-center">
            <AiOutlineShoppingCart />
            <button className="bg-transparent border-none outline-none text-white"> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Task2;