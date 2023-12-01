"use client";
import React, { useState, useEffect } from "react";
import {  ref, set ,push} from "firebase/database";
import { collection,addDoc } from "firebase/firestore";
import { db } from "@/app/api/firebaseConnect";
const FillingSystemForm = () => {
  
  const [values,setValues] = useState({amount:'',volumn:''})
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(values.amount!=='' && values.volumn!==''){
      await addDoc(collection(db,'fillInfo'),{
        volumn:values.volumn,
        amount:values.amount
      })
    }
    setValues({amount:'',volumn:''})


  };


  return (
    <div
      className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md"
    >
      <div
        className="
    bg-indigo-800
      px-4
      py-8
      shadow
      sm:rounded-lg
      sm:px-10"
      >
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="small-input"
              className="
                block 
                mb-2 
                text-lg 
                font-medium  
              text-white"
            >
              Dung tích
            </label>
            <input
              type="number"
              id="small-input"
              placeholder="Nhập dung tích"
              value={values.volumn}
              onChange={(e)=>setValues({...values,volumn:e.target.value})}
              className="
              bg-gray-50 
                border 
              border-gray-300 
              text-gray-900 
                text-sm 
                rounded-lg 
              focus:ring-blue-500 
              focus:border-blue-500 
                block 
                w-full 
                p-2.5 
              dark:bg-gray-700 
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:ring-blue-500
              dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="small-input"
              className="
                block 
                mb-2 
                text-lg 
                font-medium 
              text-white"
            >
              Số lượng chai
            </label>
            <input
              type="number"
              id="small-input"
              placeholder="Nhập số lượng chai"
              value={values.amount}
              onChange={(e)=>setValues({...values,amount:e.target.value})}
              className="
              bg-gray-50 
                border 
              border-gray-300 
              text-gray-900 
                text-sm 
                rounded-lg 
              focus:ring-blue-500 
              focus:border-blue-500 
                block 
                w-full 
                p-2.5 
              dark:bg-gray-700 
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:ring-blue-500
              dark:focus:border-blue-500"
            />
          </div>
          <div
           className="
            flex
            flex-col
            justify-center
            lg:px-10">
            <button 
              type="submit" 
              onClick={handleSubmit}
              className="
              text-white 
              bg-blue-700 
              hover:bg-blue-800 
                focus:ring-4 
                focus:outline-none 
              focus:ring-blue-300 
                font-medium 
                rounded-lg 
                text-sm 
                w-full 
                sm:w-auto 
                px-5 
                py-2.5 
                text-center
                transition 
                duration-300 
                ease-in-out 
              dark:bg-blue-600 
              dark:hover:bg-blue-700
              dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillingSystemForm;
