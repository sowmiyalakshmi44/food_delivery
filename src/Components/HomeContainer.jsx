import React from 'react'
import Delivery from '../img/delivery.png'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full  ;' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start md:justify-start gap-6 '>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Bike delivery</p>
          <div className='w-10 h-10 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery}
            className='w-full h-full object-contain' alt="delivery" />
          </div>
        </div>
        <p className='text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor '>The Fastest delivery in{" "} <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>your city</span> </p>
        <p className='text-base  text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tenetur nisi facilis dolore ab exercitationem sequi doloremque tempore reprehenderit consequuntur? Sit quaerat est officiis earum distinctio a reiciendis dolorem esse.
        </p>
        <button type="button" className='bg-gradient-to-br from-orange-400 to-orange-500 md:auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100  '>Order Now</button>

      </div>
      <div className='py-2 flex-1'></div>
    </section>
  )
}

export default HomeContainer