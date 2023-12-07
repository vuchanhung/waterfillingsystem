"use client";
import React, { useState, useEffect } from "react";
import Button from "../button/Button";

const FillingSystemForm = () => {
  
  const [values,setValues] = useState({totalAmount:'',volumn:''})
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit =async (e:any) => {
    e.preventDefault()
    
  }  

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
        <form 
          className="max-w-sm mx-auto">
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
              Dung tích (ml)
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
              value={values.totalAmount}
              onChange={(e)=>setValues({...values,totalAmount:e.target.value})}
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
            <Button/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillingSystemForm;