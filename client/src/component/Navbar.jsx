import React, { use, useState } from 'react'
import { Link, useSubmit } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const[mobileMenu, SetMobileMenu] = useState(false)
  const toggleMenu = () => SetMobileMenu(!mobileMenu)

  const[formIsOpen, setFormIsOpen] = useState(false)

  const [isRegister, setIsRegister] = useState(false)

  const openForm = () => setFormIsOpen(true)
  const closeForm =() => {
    setFormIsOpen(false)
    setIsRegister(false)
  } 

  const toggleForm = () => setIsRegister(!isRegister)

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[location, setLocation] = useState('')
  const[password, setPassword] = useState('')
  const[confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data ={
      name: name,
      email: email,
      location: location,
      password: password
    }

    console.log('Sending data: ' ,data)

    const backendUrl = ''

    const response = await fetch(backendUrl, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    console.log("Backend", result)
  }

  return (
    <header className='w-full bg-amber-100/20 top-0 fixed z-50 backdrop-blur-sm'>
        <motion.div 
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          type:'spring',
          stiffness:100,
          damping:25,
          delay:0.3,
          duration: 1.2,
        }}
        className='flex items-center justify-between p-2 h-15 sm:mr-20 sm:ml-20 sm:mt-2 mr-5 ml-5'>
            <div className='w-20 h-20'>
              <img src="/logo.png" alt="" />
            </div>
              <ul className='flex gap-5 font-bold text-xl md:flex hidden'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/tips'}><li>Tips</li></Link>
                <Link to={'/about'}><li>About us</li></Link>
              </ul> 
            <div onClick={openForm} className='bg-lime-500 text-white p-3 px-6 rounded-2xl font-bold md:flex hidden transition-all duration-300 shadow-lg transform hover:scale-105'>
              <button>Log in</button>
            </div>
            <div className='md:hidden'>
              <button onClick={toggleMenu}>
                {mobileMenu ? <X className='w-5 h-5'/> : <Menu w-5 h-5/>}
              </button>
            </div>
        </motion.div>
        {mobileMenu &&(
          <motion.div 
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type:'spring',
            stiffness:100,
            damping:25,
            delay:0.3,
            duration:1.2,
          }}
          className='w-full md:hidden text-lg font-semibold border-t'>
            <ul className='flex flex-col items-center text-center mt-3 space-y-2'>
              <Link to={'/'}><li>Home</li></Link>
              <Link><li>About</li></Link>
              <Link><li>News</li></Link>
            </ul>
          </motion.div>
        )}
        {formIsOpen && (
          <motion.div 
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type:'spring',
            stiffness:100,
            damping:25,
            delay:0.3,
            duration:1.2,
          }}
          className='fixed top-0 left-0 w-screen h-screen backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto'>
            <motion.div 
            key={isRegister ? 'register' : 'login'}
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.5
            }}
            className='bg-white dark:bg-lime-400/20 shadow-xl w-full max-w-md p-6 rounded-xl max-h-[90vh] overflow-y-auto'>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold text-xl'>{isRegister ? 'Create account' : 'Log in'}</h1>
                <X className='font-bold' onClick={closeForm}/>
              </div>
              <form action="">
                {isRegister && (
                  <div className='mt-5'>
                    <label htmlFor="name" className='text-base font-semibold block'>Name</label>
                    <input type="text" id='Name' placeholder='Type your email' className='w-full text-gray-300 bg-slate-800 px-6 py-2 rounded-lg mt-3 focus:ring-2 focus:ring-lime-200'/>
                  </div>
                )}
                <div className='mt-5'>
                  <label htmlFor="username" className='text-base font-semibold block'>Email</label>
                  <input type="text" id='username' placeholder='Type your email here' className='w-full text-gray-300 bg-slate-800 px-6 py-2 rounded-lg mt-3 focus:ring-2 focus:ring-lime-200'/>
                </div>
                {isRegister && (
                  <div className='mt-5'>
                    <label htmlFor="location" className='text-base font-semibold block'>Location</label>
                    <select name="location" id="location" placeholder='Select your location' className='w-full text-gray-300 bg-slate-800 px-6 py-2 rounded-lg mt-3 focus:ring-2 focus:ring-lime-200 appearance-none cursor-pointer'>
                      <option value="">Select your location</option>
                      <option value="western">Western Province</option>
                      <option value="central">Central Province</option>
                      <option value="southern">Southern Province</option>
                      <option value="nothern">Northern Province</option>
                      <option value="eastern">Eastern Province</option>
                      <option value="northwestern">North Western Province</option>
                      <option value="northcentral">North Central Province</option>
                      <option value="uva">Uva Province</option>
                      <option value="sabaragamuwa">Sabaragamuwa Province </option>
                    </select>
                  </div>
                )}
                <div className='mt-5'>
                  <label htmlFor="password" className='text-base font-semibold block'>Password</label>
                  <input type="password" id='password' placeholder='Type your password' className='w-full text-gray-300 bg-slate-800 px-6 py-2 rounded-lg mt-3 focus:rig-2 focus:ring-lime-200'/>
                  {!isRegister && (
                    <div className='w-full text-right mt-1'>
                      <span className='text-sm font-medium text-gray-800 hover:underline'>Forget password?</span>
                    </div>
                  )}
                </div>
                {isRegister && (
                  <div className='mt-5'>
                    <label htmlFor="password" className='text-base font-semibold block'>Confirm password</label>
                    <input type="password" id='password' placeholder='Confirm password here' className='w-full text-gray-300 bg-slate-800 px-6 py-2 rounded-lg mt-3 focus:rig-2 focus:ring-lime-200'/>
                  </div>
                )}
                <div className='mt-10 w-full text-center font-bold text-lg rounded-xl p-3 bg-gradient-to-r from-lime-400/80 to-lime-500/80 backdrop-blur-sm text-white shadow-lg hover:shadow-2xl border border-lime-300/50 transform transition-all duration-300 cursor-pointer'>
                  <button>LOGIN</button>
                </div>
                <div className='mt-5 text-center font-medium'>
                  <p>{isRegister ? 'Already have an account ' : 'Create account '}<span className='font-bold cursor-pointer' onClick={toggleForm}>{isRegister ? 'Log in' : 'New account'}</span></p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
    </header>
  )
}

export default Navbar