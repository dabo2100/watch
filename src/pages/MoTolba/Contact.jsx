import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import bannerTop from "../../assets/bannerTop.png";
export default function Contact() {
  return (
    <section className=" w-full flex flex-col items-center justify-center py-10 gap-10">
      <div className=" w-full flex flex-col items-center justify-center bg-white p-6 gap-6">
        <div className=" w-full flex  items-center gap-3 py-5 bg-[#fafafa] rounded-2xl px-6 border border-gray-200">
          {/* زر الرجوع للرئيسية */}
          <Link to="/" className=" flex items-center gap-3 text-gray-800">
            Home <SlArrowRight />
          </Link>

          {/* العنوان */}
          <h2 className=" text-black ">Contact Us</h2>
        </div>

        <div className=" w-full flex md:flex-row items-start md:items-center gap-6">
          <div className="w-80 h-80"></div>
          <div className="textTop flex flex-col gap-10">
            <h2 className=" text-3xl font-bold mb-4">Get in touch</h2>
            <span className="flex items-center justify-center">
              ------------
            </span>
            <p>
              Fundpress site thoughtfully designed for real humans which means
              the best user experience for your entire community of donors,
              fundraisers, customers, and staff.
            </p>
            <span>Welcome to the beautiful Kafr El-Sheikh Governorate! 🌿</span>
          </div>
          <div className="w-80 h-80"></div>
        </div>

        {/* الخريطة */}
        <div className="w-full h-[400px] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
          <iframe
            title="خريطة كفر الشيخ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6843.664166889963!2d30.937341!3d31.111086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7b3a7d6f4a14d%3A0x9c53db4c758d62ce!2z2YXZg9iq2Kgg2KfZhNin2YTZitmE2YrYqSDYp9mE2YLYt9mK2Kkg2KfZhNi02LHZg9ipINin2YTZhdmK2YLYp9iMINmF2YTZhtmC2YrYqQ!5e0!3m2!1sar!2seg!4v1697825123456!5m2!1sar!2seg"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* <div>
        <div className="flex items-center justify-center w-full overflow-hidden p-5">
          <img src={bannerTop} />
        </div>

      </div> */}
    </section>
  );
}
