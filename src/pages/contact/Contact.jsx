import Hero from "../../components/Hero";
import photo from "../../assets/image 30.png";
import Icon from "../../assets/Frame 1 (1).png";
import image1 from "../../assets/Frame 84.png";
import image2 from "../../assets/Frame 85.png";
import image3 from "../../assets/Frame 86.png";
import image4 from "../../assets/Frame 87.png";

export default function Contact() {
  return (
    <>
      <div>
        <Hero 
          bg={photo}
          title={"Redefining the Horizon of Modern Luxury Living"}
          desc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
          exist={false}
        />
      </div>

      {/* الحاوية الرئيسية: عمودي على الموبايل، وجنب بعض على الشاشات الكبيرة */}
      <div className="flex flex-col lg:flex-row justify-center items-start px-4 md:px-12 lg:px-20 mt-12 md:mt-24 gap-12 max-w-[1440px] mx-auto mb-20">
        
        {/* قسم معلومات التواصل */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div>
            <div className="w-full">
              <p className="text-xl md:text-2xl font-semibold text-gray-900">Contact information</p>
            </div>

            <p className="w-full text-[#847D7D] mt-2 leading-relaxed">
              Our team is available for private consultations and off-market inquiries.
              We operate with absolute discretion to ensure your real estate objectives are met with precision.
            </p>

            {/* الصور / معلومات الاتصال الفرعية */}
            <div className="mt-8 mb-8 flex flex-col gap-4">
              <img src={image1} alt="Contact Detail 1" className="w-full max-w-[380px] h-auto object-contain" />
              <img src={image2} alt="Contact Detail 2" className="w-full max-w-[288px] h-auto object-contain" />
              <img src={image3} alt="Contact Detail 3" className="w-full max-w-[128px] h-auto object-contain" />
              <img src={image4} alt="Contact Detail 4" className="w-full max-w-[105px] h-auto object-contain" />
            </div>
          </div>

          <p className="text-[#847D7D] mb-3">Follow us on social media</p>
          <div className="w-[150px] h-[50px] mb-8">
            <img src={Icon} alt="Social Media Icons" className="w-full h-full object-contain" />
          </div>

          <div className="mt-2">
            <p className="text-[#847D7D] font-medium mb-4">Working Hours</p>
            
            {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"].map((day) => (
              <div key={day} className="flex flex-row mb-2">
                <p className="w-[90px] text-[#8E1616] font-medium">{day} :</p>
                <p className="text-[#847D7D]">9:00AM - 5:00 PM</p>
              </div>
            ))}
          </div>
        </div>  

        {/* قسم نموذج الإرسال (Form) */}
        <div className="w-full lg:w-[673px] bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            Send us a message
          </h2>

          <form className="space-y-5">
            {/* حقل الاسم */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-[#F9F9F9] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8E1616]"
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-[#F9F9F9] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8E1616]"
              />
            </div>

            {/* حقل رقم الهاتف */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-[#F9F9F9] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8E1616]"
              />
            </div>

            {/* حقل الرسالة */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full bg-[#F9F9F9] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8E1616] resize-none"
              ></textarea>
            </div>

            {/* زر الإرسال */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8E1616] to-[#a32020] text-white font-medium py-3.5 rounded-lg shadow-md hover:opacity-95 transition duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

      </div> 
    </>
  );
}