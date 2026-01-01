import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handleStartCalculation = () => {
        navigate ('/activitypage')
    }

  return (
    <div className='absolute flex flex-col w-full'>
        <div className=' flex-1 sm:flex sm:mt-20 mt-15 items-center justify-between p-4 h-screen '>
            <div className='order-2 sm:order-1 items-left'>
                <img src="/Stylized Globe with Eco Icons.png" alt="" className='sm:w-160 sm:h-140 w-120 h-90' />
            </div>
            <div className='items-center justify-center text-center order-1 sm:order-2 sm:mr-20'>
                <h1 className='text-5xl sm:text-7xl font-bold font-sora'>
                    Understand Your
                </h1>
                <h1 className='text-5xl sm:text-7xl font-extrabold font-sora text-yellow-500'>
                    Carbon Footprint
                </h1>
                <div className='mt-5'>
                    <p className='text-sm sm:text-base font-semibold text-gray-400 font-inter'>EcoSense Al transforms your daily habits into</p> 
                    <p className='text-sm sm:text-base font-semibold text-gray-400 font-inter'>actionable insights, helping you make smarter choices </p> 
                    <p className='text-sm sm:text-base font-semibold text-gray-400 font-inter'>for a sustainable future.</p>    
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <div className='bg-lime-400 sm:w-60 w-60 p-3 rounded-2xl flex gap-2 justify-center text-white group hover:text-slate-950 hover:scale-105 transition-all duration-300'>
                        <button className='sm:font-bold font-extrabold' onClick={handleStartCalculation}>START CALCULATION</button>
                        <ArrowRight className='font-bold' />
                    </div>
                </div> 
            </div>
        </div>
        <div className='sm:m-20'>
            <div className='text-6xl font-bold font-sora'>
                <h1>Track. <span className='text-yellow-500'>Learn<span className='animate-pulse'>. </span></span>Act.</h1>
            </div>
            <div className='sm:flex block space-y-5 gap-8 sm:mt-10 items-center justify-center'>
                <div className='w-80 h-80 bg-lime-100/90 rounded-3xl hover:scale-105 hover:shadow-xl hover:shadow-lime-200 transition-all duration-500'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center w-15 h-15 rounded-full bg-white mt-5'>
                            <img src="track_act.png" alt="" className='w-10 h-12' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-bold sm:text-3xl mt-5'>
                        <div>
                            <h1 className='text-center'>Track <br /> Activities</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-semibold sm:text-xl mt-5'>
                        <div>
                            <p className='text-gray-600 text-center'>Enter your daily <br />transport, electricity use, <br /> and waste type</p>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-80 bg-lime-100/90 rounded-3xl hover:scale-105 hover:shadow-xl hover:shadow-lime-200 transition-all duration-500'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center w-15 h-15 rounded-full bg-white mt-5'>
                            <img src="getsore.png" alt="" className='w-10 h-12' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-bold sm:text-3xl mt-5'>
                        <div>
                            <h1 className='text-center'>Get <br /> Store</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-semibold sm:text-xl mt-5'>
                        <div>
                            <p className='text-gray-600 text-center'>Instantly see your <br />carbon footprint with a <br /> clear impact level</p>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-80 bg-lime-100/90 rounded-3xl hover:scale-105 hover:shadow-xl hover:shadow-lime-200 transition-all duration-500'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center w-15 h-15 rounded-full bg-white mt-5'>
                            <img src="improve.png" alt="" className='w-10 h-12' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-bold sm:text-3xl mt-5'>
                        <div>
                            <h1 className='text-center'>Improve <br /> Habits</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-semibold sm:text-xl mt-5'>
                        <div>
                            <p className='text-gray-600 text-center'>Receive simple tips to <br />reduce your carbon <br /> impact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='flex items-center justify-center sm:text-6xl text-5xl font-bold'>
                <h1>Make Your Impact <span className='text-yellow-400'>Today !!</span></h1>
            </div>
            <div className='flex items-center justify-between sm:m-20'>
                <div className='items-center'>
                    <p className='text-gray-600 font-semibold text-lg sm:text-xl items-center'>Climate change is shaped by the small choices we make every day. 
                        From how we travel to how much energy we use, our daily habits directly 
                        affect the planet. CarbonAware helps you understand this impact by turning 
                        everyday activities into a clear and meaningful carbon footprint score</p>
                </div>
                <div className=''>
                    <img src="lastimage.png" alt="image" className='sm:w-700 sm:h-100 w-120 h-90'/>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center bg-teal-100/60 p-5'>
            <h1 className='font-semibold items-center'>©️ 2025 CarbonAware. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Home