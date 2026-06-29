import React from 'react'
import { ArrowLeft } from 'lucide-react';

const Header = ({onBack}) => {
  return (
   <div className="flex items-center gap-4 px-6 pt-6">
      <button
        onClick={onBack}
        aria-label="Go back"
        className="w-9 h-9 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 active:scale-95 transition"
      >
        <ArrowLeft size={22} />
      </button>
      <h1 className="text-lg font-semibold text-slate-900">Forgot password</h1>
    </div>
  )
};


export default Header
