import React from 'react';
import { X } from 'lucide-react';

export default function ConfirmationModal({
  isOpen,
  onConfirm,
  onCancel,
  title,
  description,
  icon: Icon, // আইকনটিকে একটি কম্পোনেন্ট হিসেবে পাস করা হচ্ছে
  confirmText = "Confirm", // ডিফল্ট বাটন টেক্সট
  variant = 'danger', // ডিফল্ট ভ্যারিয়েন্ট
}) {
  if (!isOpen) {
    return null;
  }

  // ভ্যারিয়েন্ট অনুযায়ী স্টাইল
  const variants = {
    danger: {
      iconContainer: 'bg-red-100',
      icon: 'text-red-500',
      confirmButton: 'bg-red-500 hover:bg-red-600',
    },
    warning: {
      iconContainer: 'bg-yellow-100',
      icon: 'text-yellow-500',
      confirmButton: 'bg-yellow-500 hover:bg-yellow-600',
    },
    default: {
      iconContainer: 'bg-slate-100',
      icon: 'text-slate-500',
      confirmButton: 'bg-slate-500 hover:bg-slate-600',
    },
  };

  const selectedVariant = variants[variant] || variants.default;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-lg mx-4">
        <div className="flex flex-col items-center text-center">
          {/* Dynamic Icon */}
          {Icon && (
            <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${selectedVariant.iconContainer}`}>
              <Icon className={`w-8 h-8 ${selectedVariant.icon}`} />
            </div>
          )}

          {/* Dynamic Title */}
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          
          {/* Dynamic Description */}
          <p className="mt-2 text-slate-500">{description}</p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8 w-full">
            <button
              onClick={onCancel}
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`w-full py-2.5 px-4 rounded-lg font-semibold text-white transition-colors ${selectedVariant.confirmButton}`}
            >
              {confirmText}
            </button>
          </div>
        </div>

        <button onClick={onCancel} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}