import { useState } from "react";
import { Link } from "react-router-dom";
import { workshops, categories } from "../data/mockData";
import WorkshopCard from "../components/WorkshopCard";
import Button from "../components/Button";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const popularWorkshops = workshops.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-orange-100 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              کارگاه‌های خلاقیت در یک آخر هفته
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
              کارگاه‌های بافتنی، سفال، زیورآلات و… را از مربی‌های محلی کشف کن و
              آنلاین رزرو کن.
            </p>
            <Link to="/workshops">
              <Button size="lg" className="mb-8">
                دیدن کارگاه‌ها
              </Button>
            </Link>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    شهر
                  </label>
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">همه شهرها</option>
                    <option value="tehran">تهران</option>
                    <option value="isfahan">اصفهان</option>
                    <option value="shiraz">شیراز</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    دسته‌بندی
                  </label>
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">همه دسته‌ها</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    تاریخ
                  </label>
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <Link to="/workshops">
                <Button variant="primary" className="w-full mt-4">
                  جستجو
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">دسته‌بندی‌ها</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/workshops?category=${category.id}`}
                className={`${category.color} p-6 rounded-lg text-center hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <div className="font-bold text-lg">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Workshops Section */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">
            کارگاه‌های محبوب این هفته
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/workshops">
              <Button variant="outline">مشاهده همه کارگاه‌ها</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-lg mb-2">پرداخت امن</h3>
              <p className="text-neutral-600 text-sm">
                پرداخت‌های شما به صورت امن انجام می‌شود
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2">پشتیبانی ۲۴/۷</h3>
              <p className="text-neutral-600 text-sm">
                همیشه در کنار شما هستیم
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold text-lg mb-2">امتیاز هنرجوها</h3>
              <p className="text-neutral-600 text-sm">
                بیش از ۱۰۰۰ هنرجوی راضی
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
