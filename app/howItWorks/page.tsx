import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function howItWorks() {
  return (
    <>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.2.0/css/line.css"></link>
    <Nav /> 
    <main>
        <section className='relative top-[50] p-20'>
            <div className='container px-4 text-center'>
                <h1 className='font-extrabold text-4xl text-slate-900 mb-6'>Simple, Transparent process</h1>
                <p className='max-w-2xl text-slate-600 mx-auto text-xl'>We take the complexity out medical billing. Here is exactly how we fight for you</p>
            </div>
        </section>

        <section className='py-20 items-center'>
            <div className='container px-4 bg-slate-50 justify-center items-center w-full'>
                <div className='max-w-4xl mx-auto space-y-12'>
                    <div className='flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-white shadow-sm border-slate-100 relative'>
                        <div className='bg-slate-50 rounded-xl p-2'>
                        <i className='bx bx-upload text-blue-600 text-6xl'></i>
                        </div>
                        <div>
                            <h2 className='font-bold mb-4 text-2xl'>1. Upload your bill</h2>
                            <p className='text-slate-600 text-lg leading-relaxed'>Snap a photo or upload a PDF of your medical bill. Our secure platform ensures your data is protected and HIPPA-compliant.</p>
                        </div>                       
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-white shadow-sm border-slate-100 relative'>
                        <div className='bg-slate-50 rounded-xl p-2'>
                        <i className='bx bx-search text-emerald-600 text-6xl'></i>
                        </div>
                        <div>
                            <h2 className='font-bold mb-4 text-2xl'>2. Analysis & Extraction</h2>
                            <p className='text-slate-600 text-lg leading-relaxed'>Our OCR technology extracts line items, CPT codes, and facility fees. We identify errors, overcharges, and inflated markups.</p>
                        </div>                       
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-white shadow-sm border-slate-100 relative'>
                        <div className='bg-slate-50 rounded-xl p-2'>
                        <i className='uil uil-balance-scale text-purple-600 text-6xl'></i>
                        </div>
                        <div>
                            <h2 className='font-bold mb-4 text-2xl'>3. Benchmarking</h2>
                            <p className='text-slate-600 text-lg leading-relaxed'>We compare your bill against local and national pricing databases (CMS) to determine what a &apos;fair&apos; price actually is.</p>
                        </div>                       
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-white shadow-sm border-slate-100 relative'>
                        <div className='bg-slate-50 rounded-xl p-2'>
                        <i className='bx bx-badge-check text-red-600 text-6xl'></i>
                        </div>
                        <div>
                            <h2 className='font-bold mb-4 text-2xl'>4. Professional Negotiation</h2>
                            <p className='text-slate-600 text-lg leading-relaxed'>our expert negotiators contact the hospital&apos;s billing department directly to dispute unfair charges and secure discounts.</p>
                        </div>                       
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-white shadow-sm border-slate-100 relative'>
                        <div className='bg-slate-50 rounded-xl p-2'>
                        <i className='uil uil-file-check text-blue-600 text-6xl'></i>
                        </div>
                        <div>
                            <h2 className='font-bold mb-4 text-2xl'>5. savings Delivered</h2>
                            <p className='text-slate-600 text-lg leading-relaxed'>Once the negotiation is complete, we provide you with the new, lower bill. You only pay us a percentage of what you saved.</p>
                        </div>                       
                    </div>
                </div>
            </div>
        </section>
        
        <section className='py-20 bg-blue-50 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div>
                    <h2 className='font-bold text-3xl text-slate-900 mb-6'>Why Hospitals Negotiate</h2>
                    <p className='text-lg text-slate-600 mb-6'>Hospital billing departments expect to negotiate. They set &quot;Chargemaster&quot; prices at 400-500% of their actual costs because they expect insurance companies to demand steep discounts.</p>
                    <p className='text-lg text-slate-600 '>When you receive a bill, you are often being asked to pay the &quot;retail&quot; price that no one else pays. Bill Bot ensures you pay the &quot;fair&quot; price instead.</p>
                <div className='space-y-4'>
                    <ol className='list-disc marker:text-blue-600 px-4 marker:text-lg'>
                        <li>Benchmarking against local CMS data</li>
                        <li>Disputing &apos;Upcoding&apos; and &apos;Unbundling&apos;</li>
                        <li>Identifying duplicate charges</li>
                        <li>Leveraging Financial Assistance Policies</li>
                    </ol>
                </div>
                </div>

                <div className='relative'>
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt=""  className='rounded-3xl shadow-2xl'/>
                    <div className='absolute bg-white p-6 max-w-xs -bottom-6 -left-6 rounded-2xl shadow-xl border border-slate-50'>
                        <h2>&quot;We see an average reduction of 38% on initial hospital bills.&quot;</h2>
                        <p className='text-sm text-slate-500'>-Bill Bot Data Team</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='py-20 text-center'> 
            <div className='container px-4'>
                <h2 className='font-bold text-3xl text-slate-900 mb-8'>Ready to start saving?</h2>
                <a><button className='bg-blue-600 hover:bg-blue-700 active:scale-1.1 text-lg px-8 h-14 font-medium transition-all rounded-md mb-8 gap-2 text-white'>Get Your Bill Analyzed <i className='uil uil-arrow-right'></i></button></a>
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}
 