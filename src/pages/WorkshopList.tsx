import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { workshops, categories } from '../data/mockData';
import WorkshopCard from '../components/WorkshopCard';
import Badge from '../components/Badge';

export default function WorkshopList() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [filters, setFilters] = useState({
    city: '',
    category: categoryFilter || '',
    date: '',
    priceRange: '',
    type: '',
  });

  const filteredWorkshops = workshops.filter((workshop) => {
    if (filters.city && workshop.city !== filters.city) return false;
    if (filters.category && workshop.category !== categories.find(c => c.id === filters.category)?.name) return false;
    if (filters.type && workshop.type !== filters.type) return false;
    return true;
  });

  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">کارگاه‌ها</h1>

        {/* Filters */}
        <div className="bg-white border border-neutral-200 rounded-lg p-4 md:p-6 mb-8 sticky top-20 z-30 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-right">شهر</label>
              <select
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="">همه شهرها</option>
                <option value="تهران">تهران</option>
                <option value="اصفهان">اصفهان</option>
                <option value="شیراز">شیراز</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-right">دسته‌بندی</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
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
              <label className="block text-sm font-medium mb-2 text-right">تاریخ</label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-right">قیمت</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="">همه قیمت‌ها</option>
                <option value="low">کمتر از ۲۰۰ هزار</option>
                <option value="medium">۲۰۰ تا ۳۰۰ هزار</option>
                <option value="high">بیشتر از ۳۰۰ هزار</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-right">نوع</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="">همه انواع</option>
                <option value="حضوری">حضوری</option>
                <option value="آنلاین">آنلاین</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-neutral-600">
              {filteredWorkshops.length} کارگاه پیدا شد
            </p>
          </div>

          {filteredWorkshops.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 text-lg">کارگاهی با این فیلترها پیدا نشد.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

