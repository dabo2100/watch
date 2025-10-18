
import {UpperFooter} from '../components/FooterComponent/UpperFooter'
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <UpperFooter/>
      <div className="bg-[#1c1c24] w-full">
        <div className="container mx-auto p-4">
          <div className="h-[80px] flex flex-col lg:flex-row items-center justify-between">
            <p className="font-(family-name:--second-font) text-[14px] text-white text-sm md:text-base">© Copyrights By Xpeedstudio - 2018</p>
            <p className="font-(family-name:--second-font) text-[14px] text-white text-sm md:text-base"> Allow payment based on</p>
          </div>
        </div>
      </div>
    </div>
  )
}



