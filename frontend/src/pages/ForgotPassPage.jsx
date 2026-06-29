// import React from 'react'
// import Arrowbutton from "../components/Arrowbutton"

// const ForgotPassPage = () => {

//   return (
//       <div className="min-h-screen bg-white flex  justify-center px-6 md:p-8 items-center">
//       <div className="w-full max-w-sm  flex flex-col justify-between">
//        <div className='flex '>
//          <Arrowbutton />
//         <h2>Forgot Password</h2>
//        </div>
//        <img src="" alt="security_img" />
//       </div>
//     </div>
//   )
// }

// export default ForgotPassPage;

import { useState } from "react";
import { ArrowLeft, MessageCircle, Mail, ShieldCheck, Check } from "lucide-react";
import Header from "../components/ForgotComponents/Header";
import SecurityIllustration from "../components/ForgotComponents/SecurityIllustration";
import ContactOption from "../components/ForgotComponents/ContactOption"
import ContinueButton from "../components/ForgotComponents/ContinueButton"
// header
// function Header({ onBack }) {

//   return (
//     <div className="flex items-center gap-4 px-6 pt-6">
//       <button
//         onClick={onBack}
//         aria-label="Go back"
//         className="w-9 h-9 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 active:scale-95 transition"
//       >
//         <ArrowLeft size={22} />
//       </button>
//       <h1 className="text-lg font-semibold text-slate-900">Forgot password</h1>
//     </div>
//   );
// }


// function SecurityIllustration() {
//   return (
//     <div className="flex justify-center py-8">
//       <div className="relative w-40 h-40 flex items-center justify-center">
//         <div className="absolute w-32 h-32 rounded-full bg-rose-50" />
//         <ShieldCheck size={72} className="relative text-rose-500" strokeWidth={1.5} fill="#fde4e4" />
//       </div>
//     </div>
//   );
// }

// function ContactOption({ icon, label, value, selected, onSelect }) {
//   return (
//     <button
//       onClick={onSelect}
//       className={`w-full flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition ${selected
//         ? "border-rose-400 bg-rose-50/60"
//         : "border-slate-200 bg-white hover:border-slate-300"
//         }`}
//     >
//       <div
//         className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${selected ? "bg-rose-100 text-rose-500" : "bg-slate-100 text-slate-500"
//           }`}
//       >
//         {icon}
//       </div>
//       <div className="flex-1">
//         <p className="text-xs text-slate-400">{label}</p>
//         <p className="text-sm font-semibold text-slate-800">{value}</p>
//       </div>
//       {selected && (
//         <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
//           <Check size={13} className="text-white" strokeWidth={3} />
//         </div>
//       )}
//     </button>
//   );
// }

// function ContinueButton({ disabled, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`w-full rounded-full py-3.5 text-sm font-semibold transition active:scale-[0.98] ${disabled
//         ? "bg-rose-200 text-white cursor-not-allowed"
//         : "bg-rose-500 text-white hover:bg-rose-600"
//         }`}
//     >
//       Continue
//     </button>
//   );
// }

export default function ForgotPassPage() {
  const [selected, setSelected] = useState("");

  const contactOptions = [
    {
      id: "sms",
      label: "via SMS",
      value: "+6282*******39",
      icon: <MessageCircle size={18} />,
    },
    {
      id: "email",
      label: "via Email",
      value: "ex***le@yourdomain.com",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-[2rem] shadow-sm overflow-hidden pb-8">
        <Header onBack={() => console.log("back pressed")} />

        <SecurityIllustration />

        <div className="px-6">
          <p className="text-sm text-slate-500 mb-4">
            Select which contact details should we use to reset your password
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {contactOptions.map((option) => (
              <ContactOption
                key={option.id}
                icon={option.icon}
                label={option.label}
                value={option.value}
                selected={selected === option.id}
                onSelect={() => setSelected(option.id)}
              />
            ))}
          </div>

          <ContinueButton
            disabled={!selected}
            onClick={() => console.log("Continue with", selected)}
          />
        </div>
      </div>
    </div>
  );
}
