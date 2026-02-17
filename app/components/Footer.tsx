import React from 'react'

function footer() {
  return (
    <>
      <footer className="border-t bg-slate-50">
        <div className="container px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="justify-center">
              <a href="" className="items-center flex gap-2">
              <i className="bx bx-check-shield font-extrabold text-blue-600 text-3xl "></i>
              <span className="text-blue-600 font-bold text-xl">Bill Bot</span>
              </a>
              <p className="text-slate-500 text-sm">Empowering patients to fight unfair medical bills. We handle the negotiation so you focus on your recovery</p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Service</h3>
              <ul className="text-sm text-slate-500 space-y-2">
                <li><a href="">How it Works</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Upload a Bill</a></li>
                <li><a href="">Trust & Transparency</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="text-sm text-slate-500 space-y-2">
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Service</a></li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <ul className="text-sm text-slate-500 space-y-2">
                <li ><a href="" className="items-center flex gap-2"><i className='bx bx-envelope text-xl' ></i> support@billbot.com</a></li>
                <li ><a href="" className="items-center flex gap-2"><i className='bx bx-phone text-xl' ></i> (+234) 80 3456 1233</a></li>
                <li ><a href="" className="items-center flex gap-2"><i className='uil uil-location-point text-xl' ></i> Lagos, Nigeria</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-4 flex items-center justify-center pt-10">
            <p className="text-slate-400"><i className='bx bx-copyright' ></i>2026 Bill Bot Inc. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer
