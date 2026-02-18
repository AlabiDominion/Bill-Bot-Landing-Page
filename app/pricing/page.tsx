import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link"

export default function pricing() {
  return (
    <>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.2.0/css/line.css"></link>
    <Nav /> 
    <main>
        <section className='relative p-20'>
            <div className='container px-4 text-center mb-4'>
                <h1 className='font-extrabold  text-4xl md:text-5xl text-slate-900 mb-6'>No Savings, No Fee</h1>
                <p className='max-w-2xl text-slate-600 mx-auto text-xl'>Our interests are perfectly aligned with yours. We only get paid when we successfully reduce your medical debt.</p>
            </div>
        </section>

        <section className='bg-slate-50 p-20 w-full flex flex-col items-center'>
          <div className='item-center rounded-3xl '>
            <div className='bg-blue-600 p-20 rounded-t-3xl items-center text-center text-white'>
              <h2 className='font-bold text-2xl mb-4 tracking-widest'>OUR SIMPLE MODEL</h2>
              <div className='flex items-center justify-center gap-2 mb-6'>
                <span className='font-extrabold text-6xl'>20%</span>
                <div className='text-left'>
                <p className='text-blue-100 font-medium'>of total</p>
                <p className='text-blue-100 font-medium text-xl'>Savings</p>
                </div>
              </div>
                <p className='text-blue-100 text-lg'>Zero upfront costs. No hidden subscription fees</p>
            </div>

            <div className='p-8 md:p-12 bg-white rounded-b-3xl'>
              <ul className='space-y-4 mb-10'>
                <li className='gap-3 flex items-center'>
                  <i className='bx bx-check bg-green-100 text-green-600 rounded-full text-center p-1' ></i>
                  Complete bill analysis & OCR extraction</li>
                <li className='gap-3 flex items-center'>
                  <i className='bx bx-check bg-green-100 text-green-600 rounded-full text-center p-1' ></i>
                  Expert negotiation with hospital billing</li>
                <li className='gap-3 flex items-center'>
                  <i className='bx bx-check bg-green-100 text-green-600 rounded-full text-center p-1' ></i>
                  Benchmarking against local CMS data</li>
                <li className='gap-3 flex items-center'>
                  <i className='bx bx-check bg-green-100 text-green-600 rounded-full text-center p-1' ></i>
                  HIPAA-compliant data handling</li>
                <li className='gap-3 flex items-center'>
                  <i className='bx bx-check bg-green-100 text-green-600 rounded-full text-center p-1' ></i>
                  Final resolution paperwork handled</li>
                <li className='gap-3 flex items-center'>
                  <i className='bx bx-check bg-green-100 text-green-600 rounded-full text-center p-1' ></i>
                  Priority support via chat or email</li>
              </ul>

              <div className='p-6 bg-slate-50 rounded-2xl mb-8 border border-slate-100'>
                <h3 className='items-center flex gap-2 font-bold mb-4'><i className='bx bx-info-circle text-blue-600 text-2xl' ></i> Example Calculation</h3>
                <div className="text-sm md:text-base space-y-2">
                <div className=' flex justify-between'>
                  <span className='text-slate-600'>Original Bill</span>
                  <span className='font-bold text-slate-900'>₦100,000</span>
                </div>
                <div className=' flex justify-between'>
                  <span className='text-blue-600 font-medium'>Negotiated Price</span>
                  <span className='font-bold text-blue-600'>₦70,000</span>
                </div>
                <div className='pt-2 border-t border-slate-200 flex justify-between'>
                  <span className='font-bold'>Total Savings</span>
                  <span className='text-green-600 font-bold'>₦30,000</span>
                </div>
                <div className='pt-2 flex justify-between'>
                  <span className='font-bold'>Bill bot Fee (20%)</span>
                  <span className='text-green-600 font-bold'>₦6,000</span>
                </div>
                </div>
              </div>
                <div className=' w-full'>
              <Link href="/uploadYourBill"><button className='inline-flex items-center justify-center gap-2 font-medium bg-blue-600 text-white transition-all shadow-xs px-4 py-2 w-full hover:bg-blue-700 text-lg h-14 rounded-md'>Upload Your Bill & Save <i className='uil uil-arrow-right'></i></button></Link>
                </div>
                <p className='mt-4 text-center text-sm text-slate-500 border-none'>It takes less than 2 minutes to get started</p>
            </div>
          </div>
        </section>

        <section className='bg-slate-100 py-20 flex justify-center'>
          <div className='flex flex-col items-center justify-center max-w-5xl'>
            <i className='bx bx-check-shield text-blue-600 text-6xl mx-auto mb-6'></i>
            <h2 className='font-bold text-3xl mb-6'>Our Commitment to Transparency</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10'>
              <div>
                <h3 className='font-bold mb-2'>No Hidden Costs</h3>
                <p className='text-slate-600'>We don&apos;t charge for analysis phone calls, or paperwork. If we can&apos;t save you money, you pay ₦0 Period.</p>
              </div>
              <div>
                <h3 className='font-bold mb-2'>Fair value</h3>
                <p className='text-slate-600'>our 205 fee is significantly lower than typical medical billing advocates who often charge 30-40% or high hourly rates.</p>
              </div>
            </div>
          </div>
        </section>
    </main>
    <Footer />
    </>
  )
}
 