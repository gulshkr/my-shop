import React from 'react'
import Link from 'next/link'

const Navbar = ({cart}) => {
  return (
    <div>
        <header className="text-gray-600 body-font" >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
  <Link href="/"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
     <img className="w-8" src="/logo.svg" alt=""/>
      <span className="ml-3 text-xl" >MyShop</span>
    </a></Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" >
      <Link href="/"><a className="mr-5 hover:text-gray-900" >Home</a></Link>
      <Link href="/about"><a className="mr-5 hover:text-gray-900" >About</a></Link>
      <Link href="/products"><a className="mr-5 hover:text-gray-900" >Products</a></Link>
      <Link href="/contact"><a className="mr-5 hover:text-gray-900" >ContactUs</a></Link>
      <Link href="/checkout"><a className="mr-5 hover:text-gray-900" >Cart({cart.length})</a></Link>
    </nav>
    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-0" >Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24" >
        <path d="M5 12h14M12 5l7 7-7 7" ></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar