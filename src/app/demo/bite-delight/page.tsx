"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function BiteDelightPro() {
  const [bole, setBole] = useState({ name: 'Medium Bole', price: 3500 })
  const [fish, setFish] = useState({ name: 'Tilapia Grilled', price: 3500 })
  const [extra, setExtra] = useState({ name: 'Turkey', price: 2500 })
  const total = bole.price + fish.price + extra.price

  const order = () => {
    const text = `Hello Bite Delight!%0A*NEW ONLINE ORDER*%0A📍 New GRA%0A🍌 ${bole.name} - ₦${bole.price}%0A🐟 ${fish.name} - ₦${fish.price}%0A🍗 ${extra.name} - ₦${extra.price}%0A💰 Total: ₦${total}%0AName:%0AAddress:`
    window.open(`https://wa.me/2348182831741?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="bg-black text-white text-center py-2 text-xs tracking-widest">10 YEARS • NO.1 ONLINE BOLE BRAND • NEW GRA • EST 2016</div>
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* HERO WITH REAL IMAGES */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative h-64 rounded-3xl overflow-hidden">
            <Image src="/bole.jpg" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" alt="Bole" />
            <div className="absolute bottom-0 bg-white/90 backdrop-blur p-3 w-full"><p className="font-bold text-sm">Roasted Bole</p><p className="text-xs">Golden char, soft inside</p></div>
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden">
            <Image src="/fish.jpg" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" alt="Fish" />
            <div className="absolute bottom-0 bg-white/90 backdrop-blur p-3 w-full"><p className="font-bold text-sm">Grilled Fish</p><p className="text-xs">Tilapia & Croaker</p></div>
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden">
            <Image src="/chicken.jpg" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" alt="Chicken" />
            <div className="absolute bottom-0 bg-white/90 backdrop-blur p-3 w-full"><p className="font-bold text-sm">Turkey & Chicken</p><p className="text-xs">Smoky & Juicy</p></div>
          </div>
        </div>

        {/* COMBO BUILDER */}
        <div className="mt-8 bg-white rounded-[24px] p-6 shadow-sm max-w-2xl mx-auto">
          <h2 className="text-2xl font-black">Build Your Combo</h2>
          <p className="text-gray-500 text-sm">Pick, see total, order direct to 08182831741</p>

          <div className="mt-6 space-y-5">
            <div><p className="text-xs font-bold mb-2">BOLE SIZE</p><div className="flex gap-2">{[{n:'Small',p:2500},{n:'Medium',p:3500},{n:'Large',p:4500}].map(i=><button key={i.n} onClick={()=>setBole({name:i.n,price:i.p})} className={`flex-1 py-3 rounded-xl border-2 ${bole.name===i.n?'border-orange-500 bg-orange-50':'border-gray-100'}`}><b>{i.n}</b><br/>₦{i.p}</button>)}</div></div>
            <div><p className="text-xs font-bold mb-2">FISH</p><div className="flex gap-2">{[{n:'Tilapia',p:3500},{n:'Croaker',p:4500}].map(i=><button key={i.n} onClick={()=>setFish({name:i.n,price:i.p})} className={`flex-1 py-3 rounded-xl border-2 ${fish.name===i.n?'border-orange-500 bg-orange-50':'border-gray-100'}`}><b>{i.n}</b><br/>₦{i.p}</button>)}</div></div>
            <div><p className="text-xs font-bold mb-2">EXTRA</p><div className="flex gap-2">{[{n:'Turkey',p:2500},{n:'Chicken',p:3000}].map(i=><button key={i.n} onClick={()=>setExtra({name:i.n,price:i.p})} className={`flex-1 py-3 rounded-xl border-2 ${extra.name===i.n?'border-black bg-black text-white':'border-gray-100'}`}><b>{i.n}</b><br/>₦{i.p}</button>)}</div></div>
          </div>

          <div className="mt-8 flex justify-between items-center border-t pt-4">
            <p className="text-3xl font-black">₦{total.toLocaleString()}</p>
            <button onClick={order} className="bg-black text-white px-8 py-4 rounded-full font-bold">Order on WhatsApp →</button>
          </div>
        </div>
      </div>
    </div>
  )
}