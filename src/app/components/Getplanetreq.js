"use client";
import React from "react";
import { getplanetData} from "../../api/client/http-client";
import { useQuery } from "react-query";

export default function Getplanetreq() {
  const { data: res } = useQuery(["planet"], () => getplanetData());
  console.log(res);
 
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden overflow-y-auto">
      <ul className="grid grid-cols-2 flex-wrap ">
        {res &&
          res.map((item, index) => (
            <li key={item.id} className="bg-black text-white shadow-xl mx-2 my-2">
              <div className="flex flex-col text-center px-2 py-2">
                <p className=" text-2xl">{item.name}</p>
                <p className="text-green-800 text-bold">{item.description}</p>
                <div className="flex flex-row justify-around pt-2">
             
                    <img
                      src={item.imgSrc.img}
                      alt={item.name}
                      className="w-20 h-20"
                    />
   
                  <div className="flex flex-col justify-center">
                    <p>Volume : {item.basicDetails.volume}</p>
                    <p>Mass : {item.basicDetails.mass}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>

  );
}