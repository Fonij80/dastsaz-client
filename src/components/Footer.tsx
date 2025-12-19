import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">دست‌ساز</h3>
            <p className="text-sm leading-relaxed">
              پلتفرم رزرو کارگاه‌های دستی کوتاه‌مدت. کشف کنید، یاد بگیرید، خلق کنید.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">لینک‌های سریع</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/workshops" className="hover:text-primary-400 transition-colors">
                  کارگاه‌ها
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/host/create" className="hover:text-primary-400 transition-colors">
                  میزبانی کارگاه
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">پشتیبانی</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-primary-400 transition-colors">
                  راهنما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-400 transition-colors">
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">شبکه‌های اجتماعی</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-primary-400 transition-colors" aria-label="اینستاگرام">
                📷
              </a>
              <a href="#" className="text-2xl hover:text-primary-400 transition-colors" aria-label="تلگرام">
                ✈️
              </a>
              <a href="#" className="text-2xl hover:text-primary-400 transition-colors" aria-label="لینکدین">
                💼
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-sm">
          <p>© ۱۴۰۳ دست‌ساز. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}

