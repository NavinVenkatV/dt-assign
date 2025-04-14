"use client"
import React, { useState } from 'react'
import axios from 'axios'
const randomNo = Math.ceil(Math.random() * 10000);

function Send({setSend, number} : {number : any, setSend : any}) {
    console.log("the number is",  number)
    const message = `Hi. Your OTP is ${randomNo}`;
    const [ state, setState ] = useState("Send")
    const handleSubmit = async ()=>{
       try{
        const res = await axios.post('/sms',{
            to: number,
            text : message
        })
        if(res){
            setState("Sent")
            setTimeout(()=>{
                setSend(false)
            }, 2000)
        }
       }catch(e){
        alert(e)
        console.log(e)
       }
    }
    return (
        <div className='relative inset-0 flex flex-col mt-3 justify-center z-50'>
            <p className='border-2 border-green-800 rounded-xl p-2 pr-3'>{message}</p>
            <div
            onClick={handleSubmit}
            className='text-center w-full mt-4 flex justify-center'>
                <div
                    className='transition-all hover:-translate-y-0.5 duration-300 ease-in-out rounded-full text-center py-2 cursor-pointer bg-green-800 text-white w-[100px]'
                >
                    {state}
                </div>
            </div>
        </div>
    )
}

export default Send

