import Image from "next/image";
import Nav from "./components/Nav";
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
          <div className="container px-4">
            <div className="grid md:grid-rows-4 grid-cols-2 gap-12 items-center w-full">
            <div className="md:grid-col-3 gap-12 items-center">
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

              <div className="bg-blue-200 rounded-lg text-center flex justify-center items-center w-12 h-12 p-2">
                <i className="bx bx-check-shield font-extrabold text-blue-600 text-3xl "></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Expert Advocacy</h3>
                <p className="text-slate-600">Focus on your recovery while we handle the complex billing disputes and hospital negotiations.</p>
              </div></div>

            </div>
            <div className="bg-white rounded-lg">
              <div></div>
            </div>
        </div>
        </section>
      </main>
    </>
  );
}
