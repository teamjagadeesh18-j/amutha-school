"use client";
import { TextEffect } from '@/components/core/text-effect';
import React, { useState } from "react";

export default function CssImageStacking() {
  const items = [
    { title: "Interactive Classroom Learning", category: "ACADEMICS", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop", text: "Dedicated teachers guiding every student in Krishna Nagar." },
    { title: "Annual Sports & Athletics Field", category: "SPORTS", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&auto=format&fit=crop", text: "Physical fitness coaching and sports ground tournaments." },
    { title: "Cultural & Stage Fests", category: "CULTURAL", text: "Developing artistic talent and stage performance confidence.", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop" },
    { title: "Science & Computer Labs", category: "PRACTICALS", text: "Hands-on physics, chemistry, and computer learning.", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&auto=format&fit=crop" },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#eef2ff] py-24 px-6 border-t border-indigo-200">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-300 font-body">
          EDITORIAL STAGE SHOWCASE
        </span>
        <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-5xl font-extrabold text-[#1e1b4b] mt-4 font-heading leading-tight">
          Explore Life at Amutha School
        </TextEffect>
        <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-indigo-900/80 text-base sm:text-lg mt-3 font-body">
          A happy place to learn, play, and grow in Thiruninravur.
        </TextEffect>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
        {/* Main Editorial Hero */}
        <div className="lg:col-span-8 group">
          <div className="w-full h-[520px] rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(79,70,229,0.12)]">
            <img
              src={items[active].src}
              alt={items[active].title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 px-1">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest font-body">
              ✦ {items[active].category}
            </span>
            <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#1e1b4b] font-heading mt-0.5">{items[active].title}</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-indigo-900/80 font-body mt-1">{items[active].text}</TextEffect>
          </div>
        </div>

        {/* Interactive Selector List */}
        <div className="lg:col-span-4 space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 ${active === idx ? "bg-white text-[#1e1b4b] shadow-md border border-indigo-300 translate-x-2" : "bg-white/40 text-indigo-900/70 hover:bg-white/80"}`}
            >
              <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest font-body">0{idx + 1}. {item.category}</span>
              <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm font-bold font-heading">{item.title}</TextEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
