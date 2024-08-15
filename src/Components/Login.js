import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
     const navigate = useNavigate()
     const handlePass=()=>{
         navigate('/password')       
      }

  return (
    <div>
                <div className="mx-auto w-full h-screen flex justify-center items-center flex-col lg:flex-row ">
                    <div className="left mt-8 h-52 xl:w-1/3">
                        <img className="h-[8vh] mx-auto lg:h-20" src="facebook.png" alt="" />
                        <p className="text-2xl mb-8 mx-8 text-center lg:ml-14">Facebook helps you connect and share with the people in your
                            life.</p>
                    </div>
                    <div
                        className="right mt-8  lg:h-full flex justify-center flex-col ">
                        <div className="container mx-auto flex flex-col w-60 xxs:w-80 h-[25rem] rounded-lg bg-white outline outline-2 outline-gray-200 shadow-xl
                             ">
                            <input className="email h-12 m-4 p-3 w-auto outline outline-2 outline-gray-200 rounded-md text-sm xxs:text-lg"
                                type="text" placeholder="Email address or phone number" />
                            <input className="password h-12 mx-4 p-3 w-auto outline outline-2 outline-gray-200 rounded-md text-sm xxs:text-lg"
                                type="password" placeholder="password" />
                            <button className="btn p-2 mx-6 my-4  w-auto bg-blue-500 text-2xl text-white font-semibold rounded-md">Log
                                in</button>
                            <span className="link text-blue-500 mx-16 mb-4 text-center hover: cursor-pointer" onClick={handlePass} >
                                forgotten password?
                            </span>
                            <hr />
                            <button
                                className="btn2 px-4 pt-2 pb-3 my-6 mx-12 w-auto bg-green-500 text-xl text-white font-semibold rounded-md">create
                                account</button>
                        </div>
                        <div className="msg text-lg my-4 mx-8 text-center">
                            <span className="font-bold">
                                Create a Page
                            </span>
                            <span>
                                for a celebrity, brand or business.
                            </span>
                        </div>
                    </div>
                </div>
       
    </div>
  )
}

export default Login
