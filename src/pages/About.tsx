export default function About() {
  return (
    <div className="py-12">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">درباره دست‌ساز</h1>
        
        <div className="bg-white border border-neutral-200 rounded-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">ما کی هستیم؟</h2>
            <p className="text-neutral-700 leading-relaxed">
              دست‌ساز یک پلتفرم آنلاین برای رزرو کارگاه‌های دستی کوتاه‌مدت است. 
              ما به شما کمک می‌کنیم تا کارگاه‌های خلاقانه را در شهر خود پیدا کنید 
              و مهارت‌های جدید یاد بگیرید.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">ماموریت ما</h2>
            <p className="text-neutral-700 leading-relaxed">
              ما معتقدیم که یادگیری مهارت‌های دستی می‌تواند زندگی را غنی‌تر کند. 
              هدف ما این است که دسترسی به آموزش‌های باکیفیت را برای همه آسان کنیم.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">چرا دست‌ساز؟</h2>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">✓</span>
                <span>کارگاه‌های متنوع در دسته‌بندی‌های مختلف</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">✓</span>
                <span>مربی‌های با تجربه و حرفه‌ای</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">✓</span>
                <span>رزرو و پرداخت آنلاین آسان</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">✓</span>
                <span>پشتیبانی ۲۴/۷</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

