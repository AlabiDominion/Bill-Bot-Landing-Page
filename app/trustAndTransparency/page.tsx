"use client"

import React, {useState} from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function trustAndTransparency() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "Is my medical data secure?",
            answer: "Absolutely. We use industry-standard encryption and our platform is fully HIPAA-compliant. Your medical records are only accessible to the experts working directly on your case."
        },
        {
            question: "Will this affect my credit score?",
            answer: "No. Negotiating a bill is a standard process and does not negatively impact your credit. In fact, by resolving the debt before it goes to collections, we help protect your credit score."
        }, 
        {
            question: "What if Bill Bot can't save me any money?",
            answer: "Then you pay us nothing. Our 20% fee is only calculated based on actual, realized savings. If the hospital refuses to budge, our service is completely free."
        },
        {
            question: "Do you work with all hospitals?",
            answer: "We work with almost all major hospital systems and private clinics across the United States. If it's a medical bill, we can likely help."
        },
        {
            question: "How long does the process take?",
            answer: "Most negotiations are resolved within 2 to 4 weeks, depending on the hospital's responsiveness. We keep you updated every step of the way."
        }
    ]

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

  return (
    <>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.2.0/css/line.css"></link>
    <Nav /> 
    <main>
        <section className='bg-white relative p-20 w-full border-b border-slate-200'>
            <div className='text-center px-4 mb-4 pt-10'>
                <h1 className='font-extrabold text-4xl mb-3'>Trust & Transparency</h1>
                <p className='text-slate-600 text-xl'>We handle your most sensitive information with the highest level of care and professional ethics.</p>
            </div>
        </section>

        <section className='bg-slate-50 py-20 px-4'>
            <div className='items-center justify-center grid grid-cols-1 md:grid-cols-3'>
                <div className='items-center justify-center flex flex-col bg-white p-4 rounded-xl mx-2 my-2'>
                    <i className='bx bx-lock-alt mb-4 text-blue-600 text-3xl text-bold bg-blue-100 rounded-xl p-2'></i>
                    <h2 className='font-bold text-xl mb-4'>HIPAA Compliant</h2>
                    <p className='text-slate-600'>Your data is handled according to strict federal guidelines for medical privacy.</p>
                </div>
                <div className='items-center justify-center flex flex-col bg-white p-4 rounded-xl mx-2 my-2'>
                    <i className='uil uil-eye mb-4 text-emerald-600 text-3xl text-bold bg-green-100 rounded-xl p-2'></i>
                    <h2 className='font-bold text-xl mb-4'>Full Visibility</h2>
                    <p className='text-slate-600'>Track every call, email, and update in your personal Bill Bot dashboard.</p>
                </div>
                <div className='items-center justify-center flex flex-col bg-white p-4 rounded-xl mx-2 my-2'>
                    <i className='bx bx-check-shield mb-4  text-purple-600 text-3xl text-bold bg-purple-100 rounded-xl p-2'></i>
                    <h2 className='font-bold text-xl mb-4'>No Data Selling</h2>
                    <p className='text-slate-600'>We never sell your data to third parties. Our only revenue comes from your savings.</p>
                </div>
                
            </div>
        </section>

        <section className='bg-slate-50 py-20 px-4'>
            <div className='items-center flex flex-col'>
                <i className="uil uil-question-circle text-blue-600 text-5xl"></i>
                <h2 className='font-bold text-3xl mb-6'>Frequently Asked Questions</h2>
                
                {faqs.map((faq, index) => (
                    <div key={index} className='bg-white rounded-xl border border-slate-200 p-4 mb-4'>
                        <button onClick={() => toggleAccordion(index)} className='flex justify-between items-center w-full'>
                            <h3 className='font-bold'>{faq.question}</h3>
                            <i className={`bx ${openIndex === index ? "bx-chevron-up" : "bx-chevron-down"} text-ul transition-all duration-300`} ></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-4" : "max-h-0"}`}>
                            <p className='text-slate-600 mt-4'>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}
 