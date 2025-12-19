import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { workshops } from '../data/mockData';
import Button from '../components/Button';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const workshopId = searchParams.get('workshop');
  const sessionId = searchParams.get('session');
  const countParam = searchParams.get('count');

  const workshop = workshops.find((w) => w.id === workshopId);
  const session = workshop?.sessions.find((s) => s.id === sessionId);
  const participantCount = countParam ? parseInt(countParam) : 1;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    count: participantCount,
  });

  if (!workshop || !session) {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-lg text-neutral-500">اطلاعات کارگاه پیدا نشد.</p>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const totalPrice = workshop.price * formData.count;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    navigate(`/confirmation?workshop=${workshopId}&session=${sessionId}&count=${formData.count}`);
  };

  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">تکمیل رزرو</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold mb-4">اطلاعات تماس</h2>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  نام و نام خانوادگی <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  شماره موبایل <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="09123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  ایمیل (اختیاری)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-right">
                  تعداد نفر
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, count: Math.max(1, formData.count - 1) })}
                    className="w-10 h-10 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{formData.count}</span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, count: Math.min(workshop.capacity, formData.count + 1) })}
                    className="w-10 h-10 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <h3 className="font-bold mb-4">روش پرداخت</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-4 border-2 border-primary-500 rounded-lg cursor-pointer bg-primary-50">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      defaultChecked
                      className="w-5 h-5 text-primary-500"
                    />
                    <div>
                      <div className="font-medium">پرداخت آنلاین</div>
                      <div className="text-sm text-neutral-600">پرداخت امن با درگاه‌های معتبر</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                ⚠️ لطفا قوانین کنسلی را مطالعه کنید. در صورت کنسلی کمتر از ۴۸ ساعت قبل از کارگاه، ۵۰٪ مبلغ بازگردانده می‌شود.
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                تکمیل رزرو
              </Button>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">خلاصه سفارش</h2>

              <div className="mb-4">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-bold mb-2">{workshop.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">📍 {workshop.city}</p>
                <p className="text-sm text-neutral-600">
                  📅 {new Date(session.date).toLocaleDateString('fa-IR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-sm text-neutral-600">🕐 {session.time}</p>
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">قیمت واحد:</span>
                  <span>{formatPrice(workshop.price)} تومان</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">تعداد نفر:</span>
                  <span>{formData.count}</span>
                </div>
                <div className="border-t border-neutral-200 pt-2 flex items-center justify-between font-bold text-lg">
                  <span>قیمت کل:</span>
                  <span className="text-primary-600">{formatPrice(totalPrice)} تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

