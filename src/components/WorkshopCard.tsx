import { Link } from "react-router-dom";
import type { Workshop } from "../types";
import Badge from "./Badge";

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  return (
    <Link to={`/workshops/${workshop.id}`}>
      <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative">
          <img
            src={workshop.image}
            alt={workshop.title}
            className="w-full h-48 object-cover"
          />
          {workshop.badges && workshop.badges.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-wrap gap-2">
              {workshop.badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant={
                    badge === "آنلاین"
                      ? "secondary"
                      : badge === "آخر هفته"
                      ? "primary"
                      : badge === "مبتدی"
                      ? "blue"
                      : "purple"
                  }
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">
            {workshop.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
            <span>📍</span>
            <span>{workshop.city}</span>
            <span>•</span>
            <span>⏱ {workshop.duration} ساعت</span>
          </div>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-medium">{workshop.rating}</span>
              <span className="text-sm text-neutral-500">
                ({workshop.reviewCount})
              </span>
            </div>

            <div className="text-left">
              <div className="text-lg font-bold text-primary-600">
                {formatPrice(workshop.price)} تومان
              </div>
              <div className="text-xs text-neutral-500">
                {workshop.capacity} نفر ظرفیت
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
