import React from 'react'
import { Check } from 'lucide-react';

function ContactOption({ icon, label, value, selected, onSelect }) {
  
  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition ${selected
        ? "border-rose-400 bg-rose-50/60"
        : "border-slate-200 bg-white hover:border-slate-300"
        }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${selected ? "bg-rose-100 text-rose-500" : "bg-slate-100 text-slate-500"
          }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-slate-800">{value}</p>
      </div>
      {selected && (
        <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
          <Check size={13} className="text-white" strokeWidth={3} />
        </div>
      )}
    </button>
  );
}

export default ContactOption
