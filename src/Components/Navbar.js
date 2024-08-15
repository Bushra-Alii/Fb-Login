import{React,useState}from 'react'

export default function Navbar(props) {
  const [mode, setMode] = useState(true)

  const handleMode = () => {
    setMode(!mode)
    if (mode === true) {
      document.getElementById("myNavbar").style.backgroundColor = "black"
    }
    else {
      document.getElementById("myNavbar").style.backgroundColor = "white"
    }
  return (
    <div id="myNavbar">
      <div className='w-full bg-slate-300'>
        <div className='max-w-[1260px] py-3'>
          <ul className='flex flex-row'>
            <li className='mx-3 text-lg'>NewsMonkey</li>
            <li className='mx-3 text-lg'>Home</li>
            <li className='mx-3 text-lg'>About</li>
            <li><button className='w-[100px] p-3 bg-black text-white'onclick={handleMode} >toggleMode</button></li>
          </ul>
        </div>
      </div>

    </div>

  )
}}
