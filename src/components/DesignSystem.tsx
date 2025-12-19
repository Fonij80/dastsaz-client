import { useState } from 'react';

export default function DesignSystem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 font-medium"
        >
          <span>🎨 Design System</span>
          <span className="text-sm">{isOpen ? '▲' : '▼'}</span>
        </button>
        
        {isOpen && (
          <div className="mt-6 space-y-8 pb-6">
            {/* Colors */}
            <div>
              <h3 className="text-lg font-bold mb-4">رنگ‌ها</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-20 bg-primary-500 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">Primary (نارنجی)</p>
                  <p className="text-xs text-neutral-500">#f97316</p>
                </div>
                <div>
                  <div className="h-20 bg-secondary-500 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">Secondary (سبز)</p>
                  <p className="text-xs text-neutral-500">#22c55e</p>
                </div>
                <div>
                  <div className="h-20 bg-neutral-100 rounded-lg mb-2 border border-neutral-200"></div>
                  <p className="text-sm font-medium">Background</p>
                  <p className="text-xs text-neutral-500">#fafafa</p>
                </div>
                <div>
                  <div className="h-20 bg-neutral-900 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium text-white">Text</p>
                  <p className="text-xs text-neutral-400">#171717</p>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-lg font-bold mb-4">تایپوگرافی</h3>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold">تیتر اصلی (H1)</h1>
                <h2 className="text-3xl font-bold">تیتر فرعی (H2)</h2>
                <h3 className="text-2xl font-bold">تیتر بخش (H3)</h3>
                <p className="text-base">متن بدنه با فونت Vazirmatn و line-height مناسب برای خوانایی بهتر در فارسی.</p>
                <p className="text-sm text-neutral-600">متن کوچک‌تر برای توضیحات</p>
              </div>
            </div>

            {/* Buttons */}
            <div>
              <h3 className="text-lg font-bold mb-4">دکمه‌ها</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
                  دکمه اصلی
                </button>
                <button className="px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                  دکمه ثانویه
                </button>
                <button className="px-6 py-3 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors">
                  CTA سبز
                </button>
                <button className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-300 transition-colors">
                  دکمه خنثی
                </button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-lg font-bold mb-4">Badge ها</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  آخر هفته
                </span>
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                  آنلاین
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  مبتدی
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  محبوب
                </span>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-lg font-bold mb-4">کارت‌ها</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-neutral-200"></div>
                  <div className="p-4">
                    <h4 className="font-bold mb-2">عنوان کارت</h4>
                    <p className="text-sm text-neutral-600">توضیحات کوتاه کارت</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <h3 className="text-lg font-bold mb-4">فیلدهای ورودی</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium mb-2">نام</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">شماره موبایل</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="09123456789"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">انتخاب</label>
                  <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>گزینه ۱</option>
                    <option>گزینه ۲</option>
                    <option>گزینه ۳</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

