import React from 'react'
import fb from '../Images/facebook.png'
import { useNavigate } from 'react-router-dom'


const Password = () => {
    const navigate = useNavigate()

    const handleClick=()=>{
         navigate('/')   
    }
    return (
        <div>
             <div class="flex justify-between w-screen">
          <img src={fb} alt="" className="h-8 my-2" />
         <button class=" m-4 h-10 w-20 bg-blue-500 text-white text-lg font-semibold rounded-md hidden xs:block" onClick={handleClick}>
            Login</button>
            </div>
            <div className="w-screen h-5/6 xs:hidden">
                <div className="mx-2 font-semibold w-4 cursor-pointer " onClick={handleClick}> &larr;</div>
                <div className="w-full flex  items-center flex-col h-96">
                    <h1 className=" heading  mx-2 text-xl font-semibold ">Find your account</h1>
                    <p className=" mx-2 my-2 "> Enter your mobile number.</p>
                    <input className=" mx-2 w-60 xxs:w-72 bg-white rounded-md outline outline-1 outline-black text-sm h-8 p-3 "
                        type="number" minlength="11" placeholder="Mobile number" />
                    <button className="find mx-2 my-3 w-60 xxs:w-72 h-8 bg-blue-500 text-white rounded-2xl "> Find account</button>
                </div>
            </div>
            <div className="hidden w-screen  xs:block ">
                <div className="w-full h-96 flex justify-center items-center">
                    <div className=" bg-white h-72 w-[480px] rounded-lg">
                        <h1 className=" heading  m-4 text-2xl font-semibold font-[Helvetica]">Find your account</h1>
                        <hr />
                        <p className="m-4 text-lg font-[Arial] text-left font-medium">Please enter your email address or mobile
                            number to search for your account.</p>
                        <input
                            className=" mx-4 mb-4 w-[420px] bg-white rounded-lg outline outline-2 outline-gray-200  text-lg h-12 p-3"
                            type="text" placeholder="Email address or mobile number" />
                        <hr />
                        <div className="flex justify-end">
                            <button className=" my-4 h-10 w-24 bg-gray-200 text-gray-700 text-lg font-semibold rounded-md">
                                Cancel</button>
                            <button className=" m-4 h-10 w-24 bg-blue-500 text-white text-lg font-semibold rounded-md">
                                Search</button>
                        </div>
                    </div>
                </div>
                <div className=" mt-40 mx-32 text-center text-sm text-gray-500">
                    <p className="mb-2">
                        English (UK) اردو پښتو العربية हिन्दी বাংলা ਪੰਜਾਬੀ فارسی ગુજરાતી Deutsch Español
                    </p>
                    <hr />
                    <p className="my-2">
                        Sign UpLog inMessengerFacebook LiteVideoPlacesGamesMarketplaceMeta PayMeta StoreMeta
                        QuestInstagramThreadsFundraisersServicesVoting Information CentrePrivacy PolicyPrivacy
                        CentreGroupsAboutCreate adCreate PageDevelopersCareersCookiesAdChoicesTermsHelpContact uploading and
                        non-usersSettingsActivity log
                    </p>
                    <p>
                        Meta © 2023
                    </p>
                </div>

            </div>


        </div>
    )
}

export default Password
