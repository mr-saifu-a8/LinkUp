import React from 'react'
import { ShieldCheck } from 'lucide-react'

const SecurityIllustration = () => {
  return (
     <div className="flex justify-center py-8">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <div className="absolute w-32 h-32 rounded-full bg-rose-50" />
        <ShieldCheck size={72} className="relative text-rose-500" strokeWidth={1.5} fill="#fde4e4" />
      </div>
    </div>
  )
}

export default SecurityIllustration
