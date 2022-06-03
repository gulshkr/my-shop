import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-4'>
      
      <section className="text-gray-600 body-font" >
  <div className="container px-5 py-24 mx-center" >
    <div className="text-center mb-20" >
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4" >MyShop is a Direct-to-consumer(DTC) E-commerce Website.</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" >We  partner with brands and Deliver to  our customers and to create experiences that deepen relationships..</p>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font" >
  <div className="container px-5 py-6 mx-auto flex flex-wrap" >
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden" >
      <img alt="feature" className="object-cover object-center h-full w-full" src="Gulshan.jpeg" />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center" >
      <div className="flex flex-col mb-10 lg:items-start items-center" >
        
        <div className="flex-grow" >
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3" >Gulshan Kumar</h2>
          <p className="leading-relaxed text-base" >A college student who just trying to make this for fun but eb=ventually it becomes a very good working websites.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center" >Know More
          </a>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center" >
        <div className="flex-grow" >
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3" >The Catalyzer</h2>
          <p className="leading-relaxed text-base" >Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center" >Learn More
            
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center" >
        
        <div className="flex-grow" >
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3" >Neptune</h2>
          <p className="leading-relaxed text-base" >Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center" >Learn More
           
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</div>


    
  )
}

export default About