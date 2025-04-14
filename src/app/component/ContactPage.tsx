"use client"
import React, { useState } from 'react'
import { PT_Serif } from "next/font/google"
import { useRouter } from 'next/navigation'

const pt = PT_Serif({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

const contacts = [
    { name: "Test Me", number: "+919810153260" },
    { name: "Navin Venkat", number: "+916369301474" },
    { name: "Kate Winslet", number: "+919940622962" },
    { name: "Ryan Gosling", number: "+916369301474" },
    { name: "Tom Cruise", number: "+916369301474" },
    { name: "Sydney Sweeney", number: "+916369301474" }
];

function ContactPage() {
    const router = useRouter();
    const [contact, setContact] = useState("");
    const [ name, setName ] = useState("Select Contact")
    const [showContacts, setShowContacts] = useState(false);

    const handleSelect = (name: string, number: string) => {
        setContact(number);
        setName(name)
        setShowContacts(false);
    };

    const handleNext = ()=>{
        router.push(`/contact-info?name=${name}&number=${contact}`)
    }

    return (
        <div className={`bg-[#f8f4ec] h-[120%] px-2 text-black w-full ${pt.className} py-20`}>
            <div className='text-center'>
                <div className='text-center text-3xl md:text-5xl'>Customer data made simple.</div>
                <div className='flex justify-center '>
                    <p className='mt-4 md:mt-10 text-sm md:text-lg text-neutral-500 max-w-[500px]'>
                    Get Instant SMS and grow your Business</p>
                </div>
            </div>

            <div className='flex justify-center mt-5'>
                <div className='bg-black w-[1000px] h-auto rounded-xl text-white py-10 px-5'>
                    <div className='flex justify-between'>
                        <p className='text-2xl md:text-4xl  flex flex-col justify-center text-green-700'>List of Contacts to send SMS</p>
                        {name != "Select Contact" && <div
                        onClick={handleNext}
                        >
                            <div
                                className='mt-5 hover:-translate-y-0.5 transition-all duration-300 ease-in-out rounded-full text-center py-2 cursor-pointer bg-green-800 text-white w-[100px]'
                            >
                                Next
                            </div>
                        </div>}
                    </div>

                    {/* Button to toggle contacts */}
                    <div
                        onClick={() => setShowContacts(!showContacts)}
                        className='mt-5 transition-all hover:-translate-y-0.5 duration-300 ease-in-out rounded-full text-center py-2 cursor-pointer bg-green-800 text-white w-[250px]'
                    >
                        {name}
                    </div>

                    {/* Contact list */}
                    {showContacts && (
                        <div className='mt-6 space-y-2'>
                            {contacts.map((c, idx) => (
                                <div
                                    key={idx}
                                    className='bg-neutral-800  hover:bg-green-600 transition-all duration-400 ease-in-out px-4 py-2 rounded-lg cursor-pointer '
                                    onClick={() => handleSelect(c.name, c.number)}
                                >
                                    {c.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
