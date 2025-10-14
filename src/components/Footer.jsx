import footerLogo from '/src/assets/footer-logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

let linkStyle = 'mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="container flex flex-col items-center justify-center ">
        <div className=" w-full flex flex-col p-4">
          <div className='bg-white flex items-center justify-center p-4 py-8'>
            <img src={footerLogo} alt="" />
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 col-span-3 gap-5'>
              <div className='flex flex-col '>
                <div className='flex flex-col'>
                  <p className='font-(family-name:--second-font) text-[22px] text-[#999999] font-meduim' >Got Question? Call us 24/7</p>
                  <p className='font-(family-name:--second-font) text-[22px] text-[#444444] font-meduim'>[80] 1017 197</p>
                </div>
                <p className='mt-4 font-(family-name:--second-font) text-[14px] text-[#777777] italic'>17 Princess Road, London, Greater London
                  <br /> NW1 8JR, UK</p>
                <div className='mt-6 flex items-center justify-center gap-1  p-4 h-[51px] w-[157px] bg-[#F07F13] rounded-[5px] hover:bg-[#83B735] transition duration-300 cursor-pointer'>
                  <span className='text-white text-[16px]'><IoLocationOutline /></span>
                  <button className='text-white font-(family-name:--second-font) text-[12px] font-medium' > View On Map </button>
                </div>
              </div>
              <div className='flex flex-col'>
                <h2 className='font-(family-name:--second-font) text-[22px] text-[#999999] font-meduim'>We Using</h2>
                <p className='font-(family-name:--second-font) text-[22px] text-[#444444] font-meduim'>Safe Payments</p>
                <p className=' mt-16 font-(family-name:--second-font) text-[16px] text-[#1C1C24] font-meduim'>Secured by:</p>
              </div>
            </div>
            <div className='grid grid-cols-5 col-span-2 items-center relative '>
              <div className='flex flex-col  col-span-2'>
                <h1 className='font-(family-name:--second-font) text-[18px] text-[#1C1C24] font-medium'>Quick Links</h1>
                <a href="" className={linkStyle}>Support Center</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Term & Conditions</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Shipping</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Privacy Policy</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Help</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Products Return</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>FAQS</a>
              </div>
              <div className='flex flex-col col-span-2'>
                <h1 className='font-(family-name:--second-font) text-[18px] text-[#1C1C24] font-medium'>Our Stores</h1>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>New York</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>London SF</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Cockfosters BP</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Los Angeles</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Chicago</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'> Las Vegas</a>
                <a href="" className='mt-3 font-medium text-[#4A4A4A] font-(family-name:--second-font) text-[14px] hover:text-[#0063D1]'>Albarto</a>
              </div>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
    flex items-center justify-center gap-2
    w-[167px] h-[52px] bg-[#F07F13] rounded-[4px] cursor-pointer
    rotate-270
    transition-all duration-300
    sm:relative sm:mx-auto sm:mt-6
    lg:absolute lg:right-[30px] lg:top-1/2 lg:-translate-y-1/2
  "
              >
                <button className='text-white cursor-pointer'>BACK TOP</button>
                <FaArrowRight className='text-white cursor-pointer' />
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="bg-[#1c1c24] w-full">
        <div className="container mx-auto p-4">
          <div classNamne="h-[80px] flex flex-col lg:flex-row items-center justify-between">
            <p className="font-(family-name:--second-font) text-[14px] text-white text-sm md:text-base">© Copyrights By Xpeedstudio - 2018</p>
            <p className="font-(family-name:--second-font) text-[14px] text-white text-sm md:text-base"> Allow payment based on</p>
          </div>
        </div>
      </div>
    </div>
  )
}



