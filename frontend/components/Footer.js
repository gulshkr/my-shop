import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font" >
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col" >
    <Link href="/"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
     <img className="w-8" src="/logo.svg" alt=""/>
      <span className="ml-3 text-xl" >MyShop</span>
    </a></Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4" >© 2022 MYSHOP —
      <a href="https://instagram.com/itsgulshann" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank" >@itsgulshann</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start" >
      <a href="https://instagram.com/itsgulshann" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank" >
        <img className="w-8" src="instagram.svg" alt=""/>
      </a>
      
      <a href="https://www.facebook.com/profile.php?id=100008433846150" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank" >
        <img className="w-8" src="facebook.svg" alt=""/>
      </a>
      
      <a href="https://www.twitter.com/Gulshan109" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank" >
        <img className="w-8" src="twitter.svg" alt=""/>
      </a>

      <a href="https://www.linkedin.com/in/gulshan-kumar-936404214" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank" >
        <img className="w-8" src="linkedin.svg" alt=""/>
      </a>

    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer