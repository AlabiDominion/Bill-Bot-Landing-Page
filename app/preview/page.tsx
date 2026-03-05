"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from 'next/link'

export default function Preview() {
  const [fileUrl, setFileUrl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedFile = sessionStorage.getItem("uploadedFile");
    if (storedFile) {
      setFileUrl(storedFile);
    }
  }, []);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-slate-50 flex flex-col items-center p-20 relative">
        <h1 className="text-3xl font-bold mb-6">Your Uploaded Bill</h1>

        {fileUrl ? (
          <iframe
            src={fileUrl}
            className="w-full max-w-5xl h-[80vh] border rounded-xl shadow-xl"
          ></iframe>
        ) : (
          <p>No file found.</p>
        )}

         <div className='flex gap-4 mt-6 justify-center'>
                <Link href='./uploadYourBill'>
                <button className=" p-3 border border-slate-300 rounded-2xl hover:bg-blue-200">
                  Upload Another Bill
                </button></Link>
                
                <Link href="/">
                    <button className='text-white bg-blue-600 p-3 rounded-2xl'>Back to Home <i className='uil uil-arrow-right'></i></button>
                </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}