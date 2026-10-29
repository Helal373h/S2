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
      <div className="flex flex-row ml-[37px] mt-[118px]">
      <div className="">
        <div>
          {/* عنوان Contact Information بعرض 300px exact */}
          <div className="w-[300px] h-[43px]">
            <p className="text-xl font-semibold">Contact information</p>
          </div>

          <p className="w-[673px] min-h-[72px] text-[#847D7D] mt-2">
            Our team is available for private consultations and off-market inquiries.
            We operate with absolute discretion to ensure your real estate objectives are met with precision.
          </p>

          <div className="mt-[38px] mb-[36px]">
            <div>
              <img src={image1} alt="" className="w-[380px] h-[24px] mb-[20px]" />
              <img src={image2} alt="" className="w-[288px] h-[24px] mb-[20px]" />
              <img src={image3} alt="" className="w-[128px] h-[24px] mb-[20px]" />
              <img src={image4} alt="" className="w-[105px] h-[24px] mb-[36px]" />
            </div>
          </div>
        </div>

        <p className="w-[256px] h-[29px] text-[#847D7D]">Follow us on social media</p>
        <div className="w-[150px] h-[50px]">
          <img src={Icon} alt="Social Media Icons" />
        </div>

        <div className="mt-6">
          <p className="w-[288px] h-[29px] text-[#847D7D] font-medium">Working Hours</p>
          
          {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"].map((day) => (
            <div key={day} className="flex flex-row mb-1">
              <p className="w-[87px] h-[24px] text-[#8E1616]">{day} :</p>
              <p className="w-[166px] h-[24px] text-[#847D7D] ml-[35px]">9:00AM - 5:00 PM</p>
            </div>
          ))}
        </div>
      </div>  
      <div className="w-[673px] h-[733px] bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      {/* عنوان النموذج */}
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

        {/* حقل رقم الهاتق */}
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

        {/* زر الإرسال بتدرج اللون الأحمر الموجود في التصميم */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#8E1616] to-[#a32020] text-white font-medium py-3.5 rounded-lg shadow-md hover:opacity-95 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
      </div> 
      
    </>
  );
}