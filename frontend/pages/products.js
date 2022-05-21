import Link from 'next/link'
import React from 'react'

const Products = (props) => {
  return (
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-24 mx-auto">
    <div className="flex flex-wrap w-full md:mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShopping</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div> 
    </div>
    <div className="flex flex-wrap -m-4">
      {props.products.data.map((item)=>{
        return (
      <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-96 rounded m-auto mb-8" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <div className="hidden bg-red-800 bg-purple-800 bg-green-800 bg-blue-800"></div>
          <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.Color}-800`}></button>
          <p className="leading-relaxed text-base"> {item.attributes.Description}</p>
          <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
        </div>
      </div>
      )
    })}
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {
  let headers = {Authorization: "Bearer 20823618de1a284c7bf063cf8fdece2853cacf77581787b16e4ebb7674a408f50407563e5364b73572f168fcda0409e328a0e29b18469a35533af1711855878dd1bd13c32efe5a34810dec997b3f0fe5060351a29d634257a6ee7e5de9ef94cac2e290f063ea034c922a278131bfef7191385a7be20b429945c0c7fd868d6f06"}
  let a = await fetch("http://localhost:1337/api/products?populate=*", {headers:headers})
  let products = await a.json() 
  return {
    props: {products: products},
  }
}

export default Products