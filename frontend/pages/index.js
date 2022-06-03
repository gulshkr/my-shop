import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      <img className='object-none object-top bg-300 w-[100vw] h-[40vh]'src="bg.jpg"alt=""/>
      <section className="text-gray-600 body-font" >
  <div className="container px-5 py-24 mx-auto" >
    <div className="flex flex-wrap w-full mb-20" >
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0" >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" >Shop at MyShop</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" ></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" >“The great thing about the Internet isn't that you can reconnect with old friends or stay up to date with developing world events or send pictures of newborns immediately around the world. It is simply that you can log on to jcpenney.com from anywhere and order fresh underwear immediately after seeing your life flash before your eyes.”</p>
    </div>
    <div className="flex flex-wrap -m-6" >
      <div className="xl:w-1/4 md:w-1/2 p-4" >
        <div className="bg-gray-100 p-6 pr-6 pb-6 rounded-lg" >
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="Phone&lapy.jpg" alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4" >SmartPhone & Laptop</h2>
          <p className="leading-relaxed text-base" >India's most trusted platform to buy SmartPhone, Laptop, & many more lectronic devices, Buy Mobile Phone at MyShop and get instant delivery at your doorstep.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4" >
        <div className="bg-gray-100 p-6 rounded-lg" >
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="ClothsWoman.jpg" alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4" >Clothes</h2>
          <p className="leading-relaxed text-base" >Buy Different variety of clothes here at MyShop, Best place at most discounted price here. </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4" >
        <div className="bg-gray-100 p-6 rounded-lg" >
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="Home.jpg" alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4" >Home</h2>
          <p className="leading-relaxed text-base" >Buy your Comfort here, This is the best you will get here.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4" >
        <div className="bg-gray-100 p-6 rounded-lg" >
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="Medical.jpg" alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4" >Pharmacy</h2>
          <p className="leading-relaxed text-base" >Are You spending more time & money online than ever before. Here you come and get all your medical need at lowest price in the market, Get your delivery at doorstep</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
