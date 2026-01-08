import { createContext, useContext, useState } from "react";
import { Bell } from "lucide-react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = (message) => {
    setNotifications(prev => [
      { id: Date.now(), message },
      ...prev,
    ]);
  };

  return (
    <NotificationContext.Provider value={{ notify, notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
