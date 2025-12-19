import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/mockData';
import Button from '../components/Button';

export default function HostCreateWorkshop() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    city: '',
    address: '',
    type: 'حضوری',
    duration: '',
    capacity: '',
    price: '',
    description: '',
    whatYouMake: '',
    suitableFor: '',
    level: 'مبتدی',
    image: '',
    sessionDate: '',
    sessionTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('کارگاه شما با موفقیت ثبت شد و پس از بررسی کوتاه منتشر خواهد شد.');
    navigate('/workshops');
  };

  return (
    <div className="py-8">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">ایجاد کارگاه جدید</h1>

        <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-lg p-6 md:p-8 space-y-6">
          {/* Basic Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">اطلاعات پایه</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  عنوان کارگاه <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="مثال: کارگاه بافتنی کلاه زمستانی"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    دسته‌بندی <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">انتخاب کنید</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    شهر <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="تهران">تهران</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="شیراز">شیراز</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  آدرس کلی <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="مثال: خیابان ولیعصر، پلاک ۱۲۳"
                />
              </div>
            </div>
          </div>

          {/* Workshop Details */}
          <div className="border-t border-neutral-200 pt-6">
            <h2 className="text-2xl font-bold mb-4">جزئیات کارگاه</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    نوع <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="حضوری">حضوری</option>
                    <option value="آنلاین">آنلاین</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    مدت (ساعت) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-right">
                    حداکثر ظرفیت <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  قیمت به ازای هر نفر (تومان) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="250000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  سطح <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  <option value="مبتدی">مبتدی</option>
                  <option value="متوسط">متوسط</option>
                  <option value="پیشرفته">پیشرفته</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-neutral-200 pt-6">
            <h2 className="text-2xl font-bold mb-4">توضیحات</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  توضیحات کوتاه <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="در این کارگاه چه چیزی یاد می‌گیرید؟"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  چیزهایی که هنرجو می‌سازد (هر مورد در یک خط) <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.whatYouMake}
                  onChange={(e) => setFormData({ ...formData, whatYouMake: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="یک کلاه بافتنی کامل&#10;یک شال بافتنی&#10;آموزش تکنیک‌های پایه"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  برای چه کسانی مناسب است؟ <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.suitableFor}
                  onChange={(e) => setFormData({ ...formData, suitableFor: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="برای همه کسانی که می‌خواهند بافتنی یاد بگیرند..."
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="border-t border-neutral-200 pt-6">
            <h2 className="text-2xl font-bold mb-4">تصویر کاور</h2>
            <div>
              <label className="block text-sm font-medium mb-2 text-right">
                لینک تصویر <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="https://example.com/image.jpg"
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
          </div>

          {/* Session */}
          <div className="border-t border-neutral-200 pt-6">
            <h2 className="text-2xl font-bold mb-4">تاریخ و ساعت کارگاه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  تاریخ <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.sessionDate}
                  onChange={(e) => setFormData({ ...formData, sessionDate: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  ساعت <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  required
                  value={formData.sessionTime}
                  onChange={(e) => setFormData({ ...formData, sessionTime: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Info Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            ℹ️ کارگاه شما پس از بررسی کوتاه منتشر می‌شود. معمولاً این فرآیند کمتر از ۲۴ ساعت طول می‌کشد.
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Button type="submit" variant="primary" size="lg" className="flex-1">
              ثبت و ارسال برای بررسی
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => navigate('/workshops')}
            >
              انصراف
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

