import { useSearchParams, Link } from "react-router-dom";
import { workshops } from "../data/mockData";
import Button from "../components/Button";

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const workshopId = searchParams.get("workshop");
  const sessionId = searchParams.get("session");
  const count = searchParams.get("count");

  const workshop = workshops.find((w) => w.id === workshopId);
  const session = workshop?.sessions.find((s) => s.id === sessionId);

  if (!workshop || !session) {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-lg text-neutral-500">اطلاعات رزرو پیدا نشد.</p>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  const totalPrice = workshop.price * (count ? parseInt(count) : 1);
  const bookingCode = `DS${Date.now().toString().slice(-6)}`;

  return (
    <div className="py-12">
      <div className="container-custom max-w-2xl mx-auto">
        <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>

          <h1 className="text-3xl font-bold mb-4">رزروت ثبت شد!</h1>
          <p className="text-lg text-neutral-600 mb-8">
            رزرو شما با موفقیت انجام شد. کد رزرو خود را یادداشت کنید.
          </p>

          {/* Booking Code */}
          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <div className="text-sm text-neutral-600 mb-2">کد رزرو</div>
            <div className="text-3xl font-bold text-primary-600 font-mono">
              {bookingCode}
            </div>
          </div>

          {/* Workshop Summary */}
          <div className="text-right bg-neutral-50 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">خلاصه کارگاه</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">کارگاه:</span>
                <span className="font-medium">{workshop.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">تاریخ:</span>
                <span className="font-medium">
                  {new Date(session.date).toLocaleDateString("fa-IR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">ساعت:</span>
                <span className="font-medium">{session.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">تعداد نفر:</span>
                <span className="font-medium">{count || 1}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">قیمت کل:</span>
                <span className="font-bold text-primary-600">
                  {formatPrice(totalPrice)} تومان
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button variant="primary" size="lg" className="w-full">
              افزودن به تقویم
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              اشتراک‌گذاری با دوست
            </Button>
            <Link to="/profile" className="block">
              <Button variant="neutral" size="lg" className="w-full">
                رفتن به پروفایل
              </Button>
            </Link>
            <Link to="/workshops" className="block">
              <Button variant="outline" size="lg" className="w-full">
                بازگشت به کارگاه‌ها
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
