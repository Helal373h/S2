export default function Hero({ bg, title, desc, exist, btncontent, icons }) {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen bg-cover bg-center bg-no-repeat relative text-white flex flex-col justify-center items-center px-4 md:px-8 text-center"
    >
      {/* 1. عنوان الـ Hero (متجاوب مع كل الشاشات) */}
      <h1 className="text-3xl md:text-5xl max-w-4xl text-[#CEC7C7] font-bold mb-6 md:mb-8 leading-snug md:leading-16">
        {title}
      </h1>

      {/* 2. الوصف (تم استبدال العرض الثابت بـ max-w مع نسب مئوية) */}
      <p className="text-base md:text-lg font-bold max-w-2xl text-[#CEC7C7] mb-8 md:mb-12">
        {desc}
      </p>

      {/* 3. الزر (لو موجود) */}
      {exist && (
        <button className="w-full sm:w-64 py-3 rounded-xl text-[#EEEEEE] font-bold bg-gradient-to-r from-[#8E1616] to-[#C34B4B] hover:opacity-90 transition-opacity shadow-lg">
          {btncontent}
        </button>
      )}

      {/* 4. الأيقونة الجانبية (بتختفي على الموبايل عشان متبوظش التصميم وتظهر على الشاشات الكبيرة) */}
      {icons && (
        <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 h-[200px] w-[40px]">
          <img src={icons} alt="Icon" className="h-full w-full object-contain" />
        </div>
      )}
    </div>
  );
}