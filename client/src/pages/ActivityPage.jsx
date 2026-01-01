import React from 'react'
import { motion } from 'framer-motion'

const ActivityPage = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 1.2,
        delay: 0.3
    }}
    className='sm:m-20'>
        <div className='flex justify-center items-center h-[80vh] sm:gap-40'>
            <div className=''>
                <h1 className='sm:text-6xl font-bold text-center'>Track Your Daily <br /> <span className='text-yellow-500'>Impact</span></h1>
                <p className='sm-text-2xl text-xl font-semibold text-center sm:mt-10 text-gray-500'>Track your daily habits to see how your <br /> actions impact the planet. <br />
                Enter your transportation choices, <br /> electricity usage, and waste habits, 
                and <br /> CarbonAware will calculate your personal <br /> carbon footprint.</p>
            </div>
            <div>
               <img src="formimg1.png" alt="" className='w-160 h-130' /> 
            </div>
        </div>
        <div className='w-[1280px] h-[612px] bg-teal-200/40 flex justify-between items-center p-20'>
            <div>
                <div>
                    <img src="calculateimg.png" alt="" className='w-[622px] h-[459px]' />
                </div>
            </div>
            <div>
                <form action="" className='bg-white dark:bg-lime-400/20 shadow-xl w-full max-w-md p-6 rounded-xl max-h-[90vh] overflow-y-auto'>
                    <div className=''>
                        <label htmlFor="transport" className='block font-bold text-xl'>Transport</label>
                        <select className='bg-white appearance-none py-3 px-4 w-[300px] rounded-xl mt-5 text-center'> 
                            <option value="">Select transport type</option>
                            <option value="car">Car</option>
                            <option value="bus">Bus</option>
                            <option value="bike">Bike</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="electricity" className='block font-bold text-xl mt-5'>Electricity</label>
                        <input type="number" placeholder='Electricity (units)' className='bg-white py-3 px-4 w-[300px] rounded-xl mt-5' />
                    </div>
                    <div>
                        <label htmlFor="waste" className='block font-bold text-xl mt-5'>Waste</label>
                        <select className='bg-white appearance-none py-3 px-4 w-[300px] rounded-xl mt-5 text-center'> 
                            <option value="">Select transport type</option>
                            <option value="plastic">Plastic</option>
                            <option value="organic">Organic</option>
                        </select>
                        <div className='flex justify-center space-x-10 items-center mt-10'>
                            <div className='bg-lime-400 px-5 py-3 rounded-2xl hover:text-white hover:scale-105 transition-all duration-500'>
                                <button className='font-bold'>Submit</button>
                            </div>
                            <div className='bg-lime-400 px-5 py-3 rounded-2xl hover:text-white hover:scale-105 transition-all duration-500'>
                                <button className='font-bold'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>  
    </motion.div>
  )
}

export default ActivityPage