import { Lightbulb } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tip = () => {

    const navigate = useNavigate()

    const startCalculation = () => {
        navigate('/activitypage')
    }

  return (
    <div className='mt-20 m-20'>
        <div>
            <div className='flex items-baseline gap-2 justify-center'>
                <h1 className='sm:text-6xl font-bold sm:mt-5'>Eco-Friendly <span className='text-yellow-500'>Tips<span className='animate-pulse transition-all duration-300'>.</span></span></h1>
                <p className='sm:text-lg font-semibold text-gray-500'>Small actions today create a greener tommorrow</p>
            </div>
            <div className='flex items-center'>
                <div >
                    <div>
                        <div className='flex font-bold text-2xl items-center gap-2 group mt-10'>
                            <Lightbulb className='text-yellow-500 animate-pulse drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]' size={32} />
                            <h1>Transport tips</h1>
                        </div>
                        <ul className='font-semibold text-gray-600 list-disc list-inside sm:ml-10 sm:mt-3 space-y-2'>
                            <li>Use public transport whenever possible</li>
                            <li>Share rides to reduce emissions</li>
                            <li>Walk or cycle for short distances</li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex font-bold text-2xl items-center gap-2 group mt-10'>
                            <Lightbulb className='text-yellow-500 animate-pulse drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]' size={32} />
                            <h1>Energy saving tips</h1>
                        </div>
                        <ul className='font-semibold text-gray-600 list-disc list-inside sm:ml-10 sm:mt-3 space-y-2'>
                            <li>Turn off lights when not in use</li>
                            <li>Use energy-efficient bulbs</li>
                            <li>Reduce unnecessary electricity usage</li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex font-bold text-2xl items-center gap-2 group mt-10'>
                            <Lightbulb className='text-yellow-500 animate-pulse drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]' size={32} />
                            <h1>Waste Management Tips</h1>
                        </div>
                        <ul className='font-semibold text-gray-600 list-disc list-inside sm:ml-10 sm:mt-3 space-y-2'>
                            <li>Reduce plastic usage</li>
                            <li>Separate organic and recyclable waste</li>
                            <li>Reuse items instead of throwing them away</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="bgimg.png" alt="" />
                </div>
            </div>
            <div>
                <h1 className='sm:text-6xl font-bold sm:mt-5'>Did <span className='text-yellow-500'>you</span> know?</h1>
                <p className='sm:text-lg font-semibold text-gray-500 sm:mt-5 sm:ml-20'>Reducing small daily habits can significantly lower your carbon footprint.</p>
            </div>
            <div>
                <div className='text-center mt-20'>
                    <p className='sm:text-lg font-semibold text-gray-500 sm:mt-5'>Start applying these tips today and track your impact</p>
                    <div className='flex justify-center'>
                        <div className='bg-lime-400 sm:w-60 w-60 p-3 rounded-2xl flex gap-2 justify-center sm:mt-5 text-white group hover:text-slate-950 hover:scale-105 transition-all duration-300 text-center'>
                            <button onClick={startCalculation} className='sm:font-bold font-extrabold'>Start Calculating</button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tip