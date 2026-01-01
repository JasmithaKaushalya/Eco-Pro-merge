import React from 'react'

const About = () => {
  return (
    <div className='mt-20'>
        <div>
            <div className='text-center'>
                <h1 className='font-bold sm:text-7xl'>About <span className='text-yellow-500'>Carbon Aware</span></h1>
                <p className='text-lg mt-5 font-semibold text-gray-500'>At CarbonAware, we believe that small daily actions can create a big impact on <br /> our planet. Our platform 
                    is designed to help people understand their carbon <br /> footprint, make informed choices, and take steps toward
                     a more sustainable <br /> lifestyle.</p>
            </div>
            <div className="bg-[url('lastimage.png')] bg-contain bg-center bg-no-repeat min-h-[500px] sm:min-h-[600px]">
                <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl mx-auto'>
                    <div className='flex-1 bg-lime-50/50 p-8 rounded-2xl text-center mt-50'>
                        <h1 className='font-bold mb-6 text-3xl'>Our Mission</h1>
                        <p className='text-gray-500 font-semibold text-sm sm:text-base leading-relaxed'>Our mission is to raise awareness <br /> about carbon footprints 
                            and climate change. We provide simple tools to track daily activities,
                             calculate impact, and encourage eco-friendly habits for a sustainable future.</p>
                    </div>
                    <div className='flex-1 bg-lime-50/50 p-8 rounded-2xl text-center mt-50'>
                        <h1 className='font-bold mb-6 text-3xl'>Our Vision</h1>
                        <p className='text-gray-500 font-semibold text-sm sm:text-base leading-relaxed'>We envision a world where everyone understands the environmental impact of their 
                            actions and makes informed choices to protect the planet. By connecting people with 
                            their carbon footprint, we hope to inspire collective climate action.</p>
                    </div>
                </div>
            </div>          
           
        </div>
    </div>
  )
}

export default About