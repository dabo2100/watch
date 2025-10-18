import { LiaShuttleVanSolid } from 'react-icons/lia';
import { FaGlobeEurope } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io';
import { TiSocialPinterest } from 'react-icons/ti';
import { Link } from 'react-router-dom';
export default function HeaderUpperPart() {
    return (
        <div className="container max-w-[1140px] hidden md:flex items-center justify-between p-4">
            <div className="flex items-center gap-6 ">
                <div className="flex items-center gap-4 ">
                    <LiaShuttleVanSolid size={20} />
                    <span className="font-(family-name:--main-font) text-[13px] text-[#222222] "> Free Delivery</span>
                </div>
                <div className="flex items-center gap-4 border-l border-r border-[#d9d9d9] pl-2 pr-2">
                    <FaGlobeEurope size={15} />
                    <span className="font-(family-name:--main-font) text-[13px] text-[#222222]">Returns Policy</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-(family-name:--main-font) text-[13px] text-[#222222]">Follow Us</span>
                    <div className="flex items-center gap-2">
                        <TiSocialFacebook size={20} />
                        <TiSocialTwitter size={20} />
                        <IoLogoInstagram size={15} />
                        <TiSocialPinterest size={20} />
                    </div>
                </div>
            </div>
            <div>
                <Link to="/Login" className="cursor-pointer font-(family-name:--main-font) text-[13px] hover:text-white ">
                    Login
                </Link>
            </div>
        </div>
        )
}
