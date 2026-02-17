import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.2.0/css/line.css"></link>
      <Nav />
      <Banner/>
      <main className="grow">
        <section className="relative top-[50] p-20 lg:py-32 w-full items-center justify-center">
          <div className="container p-4">
            <div className="text-center items-center">
              <div className="inline-block text-blue-800 bg-blue-100 rounded-full text-xs font-semibold px-2.5 py-0.5">Medical Advocacy for Patients</div>
              <h1 className="font-extrabold mb-6 text-4xl md:text-6xl">We fight your medical bills</h1>
              <span className="font-extrabold text-blue-600 text-5xl mb-6">When you can't.</span>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">Don't let medical debt overwhelm you. Bill bot negotiates directly with hospitals to reduce unfair charges. You only pay if we save you money.</p>
            </div>
            <div className="gap-4 flex flex-col items-center justify-center sm:flex-row">
              <a href="">
              <button className="bg-blue-600 text-white text-lg p-5 font-medium items-center transition-all rounded-lg hover-bg-blue-700 active:scale-[0.95]">Upload Your Bill
                <i className="bx bx-right-arrow-alt ml-2"></i>
              </button></a>
              <a href="">
                <button className="border border-blue-200 text-blue-800 text-lg font-medium transition-all rounded-lg hover:bg-blue-50  p-5 items-center active:scale-[0.95]">How it works</button>
              </a>
            </div>
            <p className="justify-center flex items-center mt-4 text-slate-500 gap-2">
              <i className="bx bx-check-circle text-green-500 "></i>
              No upfront fees. No hidden costs.
            </p>
          </div>


          <div className='absolute top-0 right-0 -translate-y-12 translate-x-0 blur-3xl opacity-20 pointer-events-none'>
        <div className='aspect-square w-125 max-w-full rounded-full bg-blue-400'/> 
      </div>
      <div className='absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20 pointer-events-none'>
        <div className='aspect-square w-125 rounded-full bg-emerald-400'/>
      </div>
        </section>

        <section className=" py-20 w-full bg-slate-50">
          <div className="container px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full ">
            <div className="md:cols-span-2 gap-12 items-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The system is broken, but you don't have to pay the price.</h2>
              <div className="flex gap-2 w-full items-center">
              <div className="bg-red-200 rounded-lg text-center flex justify-center items-center w-12 h-12 p-2">
                <i className="uil uil-heartbeat font-extrabold text-red-600 text-3xl "></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Health should come first</h3>
                <p className="text-slate-600">Focus on your recovery while we handle the complex billing disputes and hospital negotiations.</p>
              </div></div>
              <div className="flex gap-2 w-full items-center">
              <div className="bg-orange-200 rounded-lg text-center flex justify-center items-center w-12 h-12 p-2">
                <i className="uil uil-chart-bar font-extrabold text-orange-600 text-3xl "></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Unfair pricing</h3>
                <p className="text-slate-600">Hospitals often charge patients 4-5x more than what insurance companies pay for the same.</p>
              </div></div>
              <div className="flex gap-2 w-full items-center">
              <div className="bg-blue-200 rounded-lg text-center flex justify-center items-center w-12 h-12 p-2">
                <i className="bx bx-check-shield font-extrabold text-blue-600 text-3xl "></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Expert Advocacy</h3>
                <p className="text-slate-600">Focus on your recovery while we handle the complex billing disputes and hospital negotiations.</p>
              </div></div>

            </div>
            <div className="bg-white rounded-lg p-8 border-slate-100 shadow-xl">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
                <h2 className="text-red-600 font-bold">COMMON ISSUE FOUND</h2>
                <p className="font-medium italic text-slate-900">&quot; inflated Facilty Fees & CPT Code Upcoding &quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 mb-4 border-blue-500">
                <h2 className="text-blue-600 font-bold">BILL BOT RESULT</h2>
                <p>Negotiated 45% reduction based on local CMS benchmarks</p>
              </div>
               <div className="border-t border-slate-200 flex justify-between items-center text-sm mb-2 mt-2">
                <h3 className="text-slate-500 pt-2">Original Bill</h3>
                <h3 className="font-bold text-slate-900">$ 12,450.00</h3>
               </div>
               <div className="flex justify-between items-center text-sm mb-4">
                <h3 className="text-blue-600 font-medium">Negotiated Price</h3>
                <h3 className="font-bold text-blue-600">$ 6,847.50</h3>
               </div>
               <div className="justify-center items-center flex bg-green-50 rounded-lg p-3">
                <h3 className="text-green-700 font-bold text-lg">Total Savings: $5,602.50</h3>
               </div>
              </div>
              
            </div>
        </div>
        </section>

        <section className="bg-white py-20">
          <div className="items-center justify-center w-full text-center mb-16">
            <h2 className="font-bold text-3xl text-slate-900 mb-4">How we protect your finances</h2> 
            <p className="text-slate-600 max-w-2xl mx-auto">We use advanced technology combined with human expertise to ensure you never pay a penny more than you should</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <i className="uil uil-file-alt text-blue-600 text-5xl mb-6"></i>
              <h2 className="font-bold text-slate-900 text-xl mb-3">OCR Bill Analysis</h2>
              <p className="text-slate-600 leading-relaxed">Our AI extracts every line item from your bill, from medication markups to facility fees.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <i className="uil uil-chart-bar text-emerald-600 text-5xl mb-6"></i>
              <h2 className="font-bold text-slate-900 text-xl mb-3">Data benchmarking</h2>
              <p className="text-slate-600 leading-relaxed">We compare your changes against CMS data and local fair-market pricing for your region.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <i className="bx bx-badge-check text-purple-600 text-5xl mb-6"></i>
              <h2 className="font-bold text-slate-900 text-xl mb-3">Expert Negotiation</h2>
              <p className="text-slate-600 leading-relaxed">Our human negotiations handle the calls and paperwork directly with hospital billing departments.</p>
            </div>

          </div>
        </section>

        <section className="w-full py-20 items-center justify-center flex">
          <div className="container px-4">
            <div className="rounded-3xl bg-blue-600 p-8 md:p-16 text-white overflow-hidden relative text-center justify-center">
            <div className="relative z-10">
              <h2 className="font-bold text-3xl md:text-3xl">Stop stressing about medical debt.</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join thousands of patients who have saved millions. Remember: Hospitals expect negotiation. Let us do it for you≥</p>

            <a href="#" >
              <button className="bg-white text-center text-blue-600 rounded-md gap-2 font-medium transition-all outline-none h-14 hover:bg-blue-50 px-8 active:scale-1.2">Upload Yor Bill Now</button>
            </a>

            <p className="text-blue-100 text-sm mt-6">Takes less than 2 minutes to start</p>
          
            </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-50 translate-x-1/2 translate-y-1/2"></div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
