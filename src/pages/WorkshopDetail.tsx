import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { workshops } from '../data/mockData';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function WorkshopDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const workshop = workshops.find((w) => w.id === id);
  const [selectedSession, setSelectedSession] = useState<string>('');
  const [participantCount, setParticipantCount] = useState(1);

  if (!workshop) {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-lg text-neutral-500">کارگاه پیدا نشد.</p>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const totalPrice = workshop.price * participantCount;

  const handleBooking = () => {
    if (!selectedSession) {
      alert('لطفا یک تاریخ و ساعت انتخاب کنید');
      return;
    }
    navigate(`/booking?workshop=${workshop.id}&session=${selectedSession}&count=${participantCount}`);
  };

  return (
    <div className="py-8">
      <div className="container-custom">
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-4">
            <img
              src={workshop.image}
              alt={workshop.title}
              className="w-full h-full object-cover"
            />
          </div>
          {workshop.images && workshop.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {workshop.images.slice(0, 4).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${workshop.title} ${index + 1}`}
                  className="w-full h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {workshop.badges?.map((badge, index) => (
                  <Badge
                    key={index}
                    variant={
                      badge === 'آنلاین' ? 'secondary' :
                      badge === 'آخر هفته' ? 'primary' :
                      badge === 'مبتدی' ? 'blue' : 'purple'
                    }
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{workshop.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-neutral-600">
                <span>📍 {workshop.city}</span>
                <span>•</span>
                <span>⏱ {workshop.duration} ساعت</span>
                <span>•</span>
                <span>👥 ظرفیت: {workshop.capacity} نفر</span>
                <span>•</span>
                <span>📚 سطح: {workshop.level}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">درباره این کارگاه</h2>
              <p className="text-neutral-700 leading-relaxed">{workshop.description}</p>
            </div>

            {/* What You Make */}
            <div>
              <h2 className="text-2xl font-bold mb-4">در این کارگاه چه می‌سازید؟</h2>
              <ul className="space-y-2">
                {workshop.whatYouMake.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suitable For */}
            <div>
              <h2 className="text-2xl font-bold mb-4">برای چه کسانی مناسب است؟</h2>
              <p className="text-neutral-700 leading-relaxed">{workshop.suitableFor}</p>
            </div>

            {/* Host */}
            <div className="bg-neutral-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">میزبان</h2>
              <div className="flex items-start gap-4">
                <img
                  src={workshop.host.avatar}
                  alt={workshop.host.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-lg mb-1">{workshop.host.name}</h3>
                  <p className="text-neutral-600 text-sm mb-2">{workshop.host.bio}</p>
                  {workshop.host.workshopCount && (
                    <p className="text-sm text-neutral-500">
                      {workshop.host.workshopCount} کارگاه دیگر
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Reviews */}
            {workshop.reviews && workshop.reviews.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">نظرات هنرجوها</h2>
                <div className="space-y-4">
                  {workshop.reviews.map((review) => (
                    <div key={review.id} className="bg-white border border-neutral-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-medium">{review.userName}</div>
                          <div className="flex items-center gap-1 text-sm">
                            <span className="text-yellow-500">⭐</span>
                            <span>{review.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {formatPrice(workshop.price)} تومان
                </div>
                <div className="text-sm text-neutral-500">به ازای هر نفر</div>
              </div>

              {/* Sessions */}
              <div className="mb-6">
                <h3 className="font-bold mb-4">تاریخ‌ها و ساعت‌ها</h3>
                <div className="space-y-2">
                  {workshop.sessions.map((session) => (
                    <label
                      key={session.id}
                      className={`block border-2 rounded-lg p-3 cursor-pointer transition-colors ${
                        selectedSession === session.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-neutral-200 hover:border-primary-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="session"
                        value={session.id}
                        checked={selectedSession === session.id}
                        onChange={(e) => setSelectedSession(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">
                            {new Date(session.date).toLocaleDateString('fa-IR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </div>
                          <div className="text-sm text-neutral-600">{session.time}</div>
                        </div>
                        <div className="text-sm text-neutral-500">
                          {session.availableSpots} جا باقی مانده
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Participant Count */}
              <div className="mb-6">
                <label className="block font-medium mb-2">تعداد نفر</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setParticipantCount(Math.max(1, participantCount - 1))}
                    className="w-10 h-10 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{participantCount}</span>
                  <button
                    onClick={() => setParticipantCount(Math.min(workshop.capacity, participantCount + 1))}
                    className="w-10 h-10 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t border-neutral-200 pt-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-600">قیمت کل:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(totalPrice)} تومان
                  </span>
                </div>
              </div>

              {/* Book Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleBooking}
              >
                رزرو و پرداخت
              </Button>

              <p className="text-xs text-neutral-500 text-center mt-4">
                قوانین کنسلی را مطالعه کنید
              </p>
            </div>

            {/* Mobile Sticky Button */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-lg z-40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-600">قیمت کل:</span>
                <span className="text-xl font-bold text-primary-600">
                  {formatPrice(totalPrice)} تومان
                </span>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleBooking}
              >
                رزرو و پرداخت
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

