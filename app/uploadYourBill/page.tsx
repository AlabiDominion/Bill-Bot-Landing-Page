"use client";
import React, { useState , useEffect } from 'react'
import Nav from "../components/Nav";
import Link from "next/link"
import Footer from "../components/Footer";
// import { stat } from 'fs';


export default function Upload() {
    const [status, setStatus] = useState("idle");
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
    setStatus("analyzing");

    setTimeout(() => {
        setStatus("success");
    }, 3000)
}
const reset = () => setStatus("idle");
  return (
    <>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.2.0/css/line.css"></link>
    <Nav /> 
    <main className='grow justify-center'>
    <section className='relative p-20 bg-slate-50 flex justify-center items-center w-full'>
        <div className='flex flex-col  items-center'>
            {status === "idle" && (
                <div className='bg-white rounded-xl p-6 shadow-xl overflow-hidden max-w-xl '>
            <div className='justify-center items-center flex flex-col py-10'>
                <h1 className='text-3xl font-bold mb-4'>Upload Your Medical Bill</h1>
                <p className='text-slate-600 max-w-2xl flex text-center'>Upload a clear photo or PDF. We&apos;ll handle the rest. Your data is encrypted and HIPAA-compliant.</p>
            </div>
                <div className='border-dashed border-2 border-blue-200 rounded-xl  flex justify-center'>
                    <label htmlFor="fileUpload" className='flex flex-col items-center p-10 rounded-xl  w-full h-full hover:bg-slate-50'>
                        <i className='uil uil-upload text-blue-600 text-6xl mb-4'></i>
                        <h2 className='font-bold text-md'>Drag & drop or click to upload</h2>
                        <p className='text-sm text-slate-500 mt-1'>Supports PDF, JPG or PNG (Max 10MB)</p>
                    </label>
                    <input type="file" id="fileUpload"  className='hidden' onChange={handleUpload}/>
                </div>
                <div className='grid md:grid-cols-2 gap-6 m-6'>
                    <div className='bg-blue-100 flex rounded-xl gap-2 p-4'>
                        <i className='bx bx-check-shield text-blue-600 text-3xl'></i>
                        <div>
                            <h2>Safe & Secure</h2>
                            <p className='text-sm text-slate-500'>256-bit SSL encryption and HIPAA compliance</p>
                        </div>
                    </div>
                    <div className='bg-blue-100 flex rounded-xl gap-2 p-4'>
                        <i className='bx bx-check-circle text-emerald-600 text-3xl'></i>
                        <div>
                            <h2>No Upfront Cost</h2>
                            <p className='text-sm text-slate-500'>We only get paid if we successfully save you money.</p>
                        </div>
                    </div>
                    
                </div>
                <p className='gap-2 text-sm text-center m-6'>
                    <i className='uil uil-exclamation-circle mr-2'></i>
                    Multiple bills? You can add more after this upload
                </p>
        </div>
            )}
        
            {status === "analyzing" && (
                <div className='bg-white rounded-xl p-6 shadow-xl max-w-xl overflow-hidden '>
            <div className='justify-center items-center flex flex-col py-10'>
                <h1 className='text-3xl font-bold mb-4'>Upload Your Medical Bill</h1>
                <p className='text-slate-600 max-w-2xl flex text-center'>Upload a clear photo or PDF. We&apos;ll handle the rest. Your data is encrypted and HIPAA-compliant.</p>
            </div>
                <div className='border-dashed border-2 border-blue-200 rounded-xl  flex justify-center'>
                    <label htmlFor="fileUpload" className='flex flex-col items-center p-10 rounded-xl  w-full h-full hover:bg-slate-50'>
                        <div className='border-4 animate-spin h-16 w-16 mb-4 rounded-full border-blue-600 border-t-transparent'></div>
                        <h2 className='font-bold text-md'>Analyzing Bill...</h2>
                        <p className='text-sm text-slate-500 mt-1'>Extracting line items and checking benchmarks</p>
                    </label>
                    <input type="file" id="fileUpload"  className='hidden'/>
                </div>
                <div className='grid md:grid-cols-2 gap-6 m-6'>
                    <div className='bg-blue-100 flex rounded-xl gap-2 p-4'>
                        <i className='bx bx-check-shield text-blue-600 text-3xl'></i>
                        <div>
                            <h2>Safe & Secure</h2>
                            <p className='text-sm text-slate-500'>256-bit SSL encryption and HIPAA compliance</p>
                        </div>
                    </div>
                    <div className='bg-blue-100 flex rounded-xl gap-2 p-4'>
                        <i className='bx bx-check-circle text-emerald-600 text-3xl'></i>
                        <div>
                            <h2>No Upfront Cost</h2>
                            <p className='text-sm text-slate-500'>We only get paid if we successfully save you money.</p>
                        </div>
                    </div>
                    
                </div>
                
        </div>
            )}
        
            {status === "success" && (
                <div className='bg-white rounded-xl max-w-xl p-6 shadow-xl overflow-hidden '>
                <div className="flex justify-center">
                    <div className='bg-green-50 p-4 rounded-full my-6'>
                    <i className='uil uil-check-circle text-green-600 text-5xl'></i>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <h2 className='font-bold text-3xl'>Upload Successful!</h2>
                    <p className='text-sm my-2 text-center max-w-lg'>Our experts have received your bill. We are currently analyzing the charges against local benchmarks.</p>
                </div>
                <div className='m-6'>
                    <div className='bg-blue-50 flex rounded-xl gap-2 p-4'>
                        
                        <div>
                            <h2 className='text-xs font-bold mb-2'>NEXT STEPS</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                                    <span>Analysis report ready in <strong>24-48 hours</strong>.</span>
                                </li>
                                 <li className="flex items-center gap-3 text-slate-700">
                                    <div className="h-6 w-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">2</div>
                                    <span>Negotiation starts after your approval.</span>
                                </li>
                                 <li className="flex items-center gap-3 text-slate-700">
                                     <div className="h-6 w-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">3</div>
                                    <span>Resolution typically in <strong>2-4 weeks</strong>.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-6 justify-center'>
                        <button onClick={reset} className=" p-3 border border-slate-300 rounded-2xl">
                  Upload Another Bill
                </button>
                <Link href="/">
                    <button className='text-white bg-blue-600 p-3 rounded-2xl'>Back to Home <i className='uil uil-arrow-right'></i></button>
                </Link>
                    </div>
                </div>
                
        </div>
            )}
        
            
        </div>
    </section>
    </main>
    <Footer />
    </>
  )
}