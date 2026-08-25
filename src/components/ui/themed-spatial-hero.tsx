'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import MovingGradientButton from '@/components/ui/moving-gradient-button';

export function AnnouncementBar() {
  return (
    <div className="bg-[#5e6ad2] text-white py-2 px-4 text-xs font-medium font-body relative text-center">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-white/90" />
        <span>✨ Admissions Open for New Academic Session • Amutha Matriculation School</span>
      </div>
    </div>
  );
}

export function SpatialHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f8f9]/90 backdrop-blur-md border-b border-[#e2e8f0] font-body">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 min-h-[60px] sm:h-16 flex items-center justify-between gap-2 text-sm text-[#0f172a]">
        <a href="/" className="hover:opacity-90 transition-opacity min-w-0 shrink"><div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#5e6ad2] text-white flex items-center justify-center font-bold font-heading shadow-sm shrink-0">
            A
          </div>
          <div className="min-w-0">
            <span className="font-bold text-xs sm:text-base text-[#0f172a] font-heading tracking-tight block truncate max-w-[160px] xs:max-w-[240px] sm:max-w-none">
              Amutha Matriculation School
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#475569] block -mt-0.5 font-medium truncate">Matriculation Campus</span>
          </div>
        </div></a>

        <nav className="hidden md:flex items-center gap-6 font-medium text-xs lg:text-sm">
          <a href="/about" className="whitespace-nowrap hover:text-[#5e6ad2] transition-colors">About Us</a>
          <a href="/academics" className="whitespace-nowrap hover:text-[#5e6ad2] transition-colors">Pathways</a>
          <a href="/facilities" className="whitespace-nowrap hover:text-[#5e6ad2] transition-colors">Infrastructure</a>
          <a href="/gallery" className="whitespace-nowrap hover:text-[#5e6ad2] transition-colors">Events</a>
          <a href="/#testimonials" className="whitespace-nowrap hover:text-[#5e6ad2] transition-colors">Parent Thoughts</a>
          <a href="/contact" className="whitespace-nowrap hover:text-[#5e6ad2] transition-colors">Contact Us</a>
        </nav>

        <div className="flex items-center gap-3">
          <MovingGradientButton
            label="Apply Now"
            link="/apply"
            padding="6px 14px 6px 14px"
            font={{ fontSize: 14, fontWeight: 700 }}
            colors={{ fill: "#5e6ad2", hoverFill: "#4b57be", textColor: "#ffffff", hoverTextColor: "#ffffff" }}
            stroke={{ color: "#838ee5", headColor: "#ffffff", count: 2, speed: 30, movement: "step" }}
          />
        </div>
      </div>
    </header>
  );
}

export function LogoStripCard() {
  const logos = [
    { name: "State Board Approved", badge: "Tamil Nadu Board" },
    { name: "STEM Learning Initiative", badge: "Practical Science" },
    { name: "Digital Learning Portal", badge: "Smart Classrooms" },
    { name: "Sports & Fitness Hub", badge: "Athletics First" },
    { name: "Student Project Hub", badge: "Hands-on Learning" },
    { name: "Excellence Awards", badge: "Rank Holders" },
  ];

  return (
    <section className="bg-[#ffffff] py-10 border-b border-[#e2e8f0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="p-4 rounded-[16px] border border-[#e2e8f0] bg-[#f7f8f9] text-center shadow-sm">
              <p className="font-bold text-xs text-[#0f172a] font-heading">{logo.name}</p>
              <p className="text-[11px] text-[#5e6ad2] font-medium font-body mt-1">{logo.badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpatialFeatureSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f7f8f9]">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-[16px] bg-[#eeeffc] text-[#5e6ad2] border border-[#e2e8f0] text-xs font-semibold tracking-wide uppercase font-body mb-4">
            DISCIPLINED LEARNING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0f172a] tracking-tight leading-[1.3] font-heading mb-4">
            Why Parents Choose Amutha Matriculation School
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-[1.56] font-body">
            Delivering structured, values-based Matriculation education with dedicated teachers, safe campus facilities, and clear academic guidance for every student.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-[16px] border border-[#e2e8f0] bg-[#ffffff] text-[#5e6ad2] text-sm font-semibold font-body shadow-sm">
              Core Foundations
            </span>
            <h3 className="text-2xl lg:text-[32px] font-semibold text-[#0f172a] leading-[1.3] font-heading">
              Structured Routines & Individual Attention
            </h3>

            <div className="space-y-4 font-body pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5e6ad2] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#0f172a]">Structured Daily Routines</h4>
                  <p className="text-sm text-[#475569] leading-relaxed">Building clear study habits, focus, and self-discipline for young minds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5e6ad2] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#0f172a]">Matriculation Board Rigor</h4>
                  <p className="text-sm text-[#475569] leading-relaxed">Comprehensive State Board curriculum fostering core subject clarity in Science and Math.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5e6ad2] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#0f172a]">Holistic Co-Curricular Wellbeing</h4>
                  <p className="text-sm text-[#475569] leading-relaxed">Nurturing physical health, outdoor games, teamwork, and confidence.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e2e8f0]">
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#0f172a] font-heading">100%</p>
                <p className="text-xs lg:text-[14px] text-[#475569] font-body">Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#0f172a] font-heading">25+ Yrs</p>
                <p className="text-xs lg:text-[14px] text-[#475569] font-body">Trust History</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#0f172a] font-heading">1:15</p>
                <p className="text-xs lg:text-[14px] text-[#475569] font-body">Teacher Ratio</p>
              </div>
            </div>
          </div>

          <div className="rounded-[16px] bg-[#ffffff] border border-[#e2e8f0] overflow-hidden shadow-lg p-3">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
              alt="Classroom Learning at Amutha Matriculation School" 
              className="w-full h-[360px] object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
