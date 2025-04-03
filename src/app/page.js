import { FaFacebook, FaEnvelope, FaWhatsapp, FaInstagram, FaTiktok, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Home from "./_components/Home";

export default function Page() {

  return (
    <>
    <section 
      style={{
        backgroundImage: "url('/assets/01.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }} 
      className="relative w-[100%] xl:h-[130vh] lg:h-[140vh] h-[140vh] min-h-[100vh]">
      <div 
      className="absolute w-[100%] xl:h-[130vh] lg:h-[140vh] h-[140vh] min-h-[100vh] bg-black opacity-50 z-10"></div>
      <div 
      className="absolute w-[100%] xl:h-[130vh] lg:h-[140vh] h-[140vh] min-h-[100vh] z-20 py-[3rem] text-white">
      <div className="w-[100%] h-[100%]">
        {/* <!-- MAIN --> */}
        <section className="w-[100%] absolute z-10 top-[3rem]">
            <div className="flex flex-col items-center justify-center gap-4 lg:mb-10 mb-14">
                <div className="lg:w-[20%] w-[40%] flex items-center justify-center mb-2">
                    <img alt="Logo" src="/assets/iba_logo.png" className="w-[100%] object-contain" />
                </div>
                <h1 className="text-center font-medium lg:text-[1.4rem] text-[1.2rem] tracking-[2px] leading-tight drop-shadow-lg">
                    Final Stage Of Pre-Launch Investments
                </h1>
            </div>
            {/* <!--  --> */}
            <Home />
            {/* !--  --> */}
            <div className="mb-8 pl-4 text-gray-50">
                <p className="leading-tight text-center font-light tracking-[2px] mb-4">COMING SOON</p>
                <p className="mx-auto lg:w-[60%] w-[80%] text-center text-[1.5rem] lg:text-[2rem] font-light leading-tight font-serif">
                    Our website is currently under construction.
                    We invite you to engage with us via our social  
                    media platforms.
                </p>
            </div>
        </section>
        {/* <!-- FOOTER --> */}
        <section className="w-[100%] absolute z-10 bottom-[2rem]">
            <div>
                <div className="text-center flex items-center justify-center gap-5 mb-6">
                    <a href="https://www.facebook.com/381482548389147" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaFacebook className=" text-[2rem]" />
                    </a>
                    <a href="https://wa.me/27683776585" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaWhatsapp className="text-[2rem]" />
                    </a>
                    <a href="mailto:info@investmentbankofafrica.coma" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaEnvelope className="text-[2rem]" />
                    </a>
                    <a href="https://www.linkedin.com/company/investment-bank-ofafrica/" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaLinkedin className="text-[2rem]" />
                    </a>
                    <a href="https://www.instagram.com/investment_bankof_africa?igsh=OXY4NWd5OTNpbnAz&utm_source=qr" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaInstagram className="text-[2rem]" />
                    </a>
                    <a href="http://www.x.com/IBA_Africa" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaXTwitter className="text-[2rem]" />
                    </a>
                    <a href="http://www.tiktok.com/@investmentbankofafrica" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaTiktok className="text-[2rem]" />
                    </a>
                </div>
                <p className="text-gray-50 text-center text-sm px-4">Copyright © 2025 Investment Bank of Africa - All Rights Reserved.</p>
            </div>
        </section>

      </div>
    </div>
</section>
    </>
  );
}
