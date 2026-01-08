import { Bell } from "lucide-react";
import { useNotification } from "../../context/NotificationContext";

export default function NotificationBell() {
  const { notifications } = useNotification();

  return (
    <div className="relative">
      <Bell className="w-6 h-6 text-gray-700" />
      {notifications.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {notifications.length}
        </span>
      )}
    </div>
  );
}
