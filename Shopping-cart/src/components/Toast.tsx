"use client";

import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-10 right-10 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
      <span>{message}</span>
    </div>
  );
};

export default Toast;
