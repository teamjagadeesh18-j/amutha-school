"use client";

import SchoolMessageSection from "@/components/ui/school-message-section";

import { ScrollVelocityDemo } from "@/components/ui/scroll-velocity-demo";

import CssImageStacking from "@/components/ui/css-image-stacking";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { Footer } from "@/components/ui/footer-section";
import FAQs from "@/components/ui/text-reveal-faqs";
import React from "react";
import { AnnouncementBar, SpatialHeader, LogoStripCard, SpatialFeatureSection } from "@/components/ui/themed-spatial-hero";
import HeroGeometric from "@/components/ui/modern-hero-section";
import AcademicStructure from "@/components/ui/academic-structure";
import TestimonialsSection from "@/components/ui/community-testimonial";
import ConnectSection from "@/components/ui/connect-section";
import HowItWorks from "@/components/ui/how-it-works";

export default function Home() {
  const communityTestimonialsData = {
  "title": "Parent & Community Reviews",
  "subtitle": "Warm reviews from parents at Amutha Matriculation School, Krishna Nagar Thiruninravur",
  "rows": [
    {
      "id": "row1",
      "speed": "45s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t1",
          "quote": "Amutha Matriculation School in Krishna Nagar is truly a happy place to learn and grow. Teachers show genuine care!",
          "authorName": "N. Kannan",
          "authorTitle": "Parent of Class 8 Student"
        },
        {
          "id": "t2",
          "quote": "Primary teachers create a welcoming environment. My child comes home smiling and full of stories every day.",
          "authorName": "Fatima Zohra",
          "authorTitle": "Primary School Parent"
        },
        {
          "id": "t3",
          "quote": "The supportive culture at Amutha helped me build strong academic fundamentals and self-confidence.",
          "authorName": "S. Chitra",
          "authorTitle": "Alumna (Batch 2020)"
        }
      ]
    },
    {
      "id": "row2",
      "speed": "35s",
      "direction": "right",
      "testimonials": [
        {
          "id": "t4",
          "quote": "Honest, accessible education for every family in Thiruninravur. School leadership is humble and cooperative.",
          "authorName": "Jennifer A.",
          "authorTitle": "Parent Forum Member"
        },
        {
          "id": "t5",
          "quote": "Teachers explain lessons patiently until every student understands. Concept clarity is prioritized.",
          "authorName": "R. Arunkumar",
          "authorTitle": "Parent of Class 6 Student"
        },
        {
          "id": "t6",
          "quote": "Clean campus, safe playground, and disciplined routine. Highly recommended school in Krishna Nagar.",
          "authorName": "M. Sudha",
          "authorTitle": "Parent of Class 4 Student"
        }
      ]
    },
    {
      "id": "row3",
      "speed": "50s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t7",
          "quote": "Amutha School nurtures a feeling of belonging for students and parents alike. A wonderful learning community.",
          "authorName": "K. Punniyakotti",
          "authorTitle": "Alumnus & Local Resident"
        },
        {
          "id": "t8",
          "quote": "Regular updates, transparent fee structure, and polite staff. We feel very glad to have picked Amutha School.",
          "authorName": "V. Usha",
          "authorTitle": "Parent Representative"
        },
        {
          "id": "t9",
          "quote": "Good balance of studies, drawing competitions, and sports days. Children enjoy their school life thoroughly.",
          "authorName": "T. Durairaj",
          "authorTitle": "Parent of Class 5 Student"
        }
      ]
    }
  ]
};

  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#475569] antialiased selection:bg-[#5e6ad2] selection:text-white font-body">
      {/* Spatial Header */}
      <SpatialHeader />

      {/* Upper-Middle Hero Velocity Ribbon */}
      
      {/* School Specific Animated Hero Section */}
      <HeroGeometric
        badge="Main Road, Avadi • Rating 4.6★"
        title1="Refined Academic Guidance & Excellence"
        title2="Academic Distinction"
        description="Structured learning pathways, dedicated staff, and individual academic support from primary to high school."
      />
      {/* Student Achievement Strip Card */}
                              
      <LogoStripCard />
      

      {/* Alternating Feature Block */}
      <SpatialFeatureSection />

      {/* Clean Frameless Middle Image Velocity Strip */}
      <ScrollVelocityDemo />

      {/* How it Works Section */}
      <HowItWorks
        title="How Admissions Work"
        subtitle="Five simple steps to get started."
      />

      {/* Academic Structure Section */}
      <AcademicStructure
        secondaryColor="#5e6ad2"
        title="Academic Journey"
        subtitle="From Early Learning to Higher Secondary"
        description="A well-structured learning journey designed to support students at every stage of their academic and personal development."
        cards={[
          {
            tag: "LKG & UKG",
            title: "Kindergarten & Early Years",
            description: "A gentle, play-integrated foundational curriculum focusing on language, numbers, sensory development, and social confidence.",
            buttonText: "Explore Early Years",
          },
          {
            tag: "Classes 1 to 5",
            title: "Primary Foundation Stage",
            description: "Building fundamental skills in Mathematics, Science, Languages, and Environmental Studies through engaging, activity-based lessons.",
            buttonText: "View Curriculum",
          },
          {
            tag: "Classes 6 to 8",
            title: "Middle School Exploration",
            description: "Strengthening analytical thinking, practical lab work, digital literacy, and collaborative problem-solving across core subjects.",
            buttonText: "Middle School Details",
          },
          {
            tag: "Classes 9 & 10",
            title: "High School Board Preparation",
            description: "Comprehensive State Board exam preparation supported by expert faculty, mock tests, personalized feedback, and concept clarity.",
            buttonText: "Board Preparation",
          },
          {
            tag: "Classes 11 & 12",
            title: "Higher Secondary Streams",
            description: "Specialized Science, Computer Science, and Commerce streams preparing students for entrance exams, degree admissions, and future careers.",
            buttonText: "Explore Hr. Sec. Streams",
            isHighlighted: true,
          },
        ]}
      />

      {/* Testimonials Section */}
      {/* CSS Image Stacking Gallery Showcase */}
      <CssImageStacking />

      
      <section id="testimonials" className="py-16 bg-[#f7f8f9] border-t border-[#e2e8f0]">
        <TestimonialsSection data={communityTestimonialsData} />
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Connect & Admission Inquiry Form */}
      <InfiniteRibbon duration={35} className="bg-white text-[#0f172a] border-y border-[#e2e8f0] py-4 text-sm sm:text-base font-semibold tracking-wide font-body shadow-sm">
        <span className="text-[#5e6ad2]">✦</span> Academic Excellence
        <span className="text-[#5e6ad2]">✦</span> State Board Rigor
        <span className="text-[#5e6ad2]">✦</span> Dedicated Faculty
        <span className="text-[#5e6ad2]">✦</span> Holistic Student Development
        <span className="text-[#5e6ad2]">✦</span> Safe & Caring Campus
        <span className="text-[#5e6ad2]">✦</span> Admissions Open
      </InfiniteRibbon>
      <ConnectSection />

      {/* Light Clean Footer */}
      {/* Leadership Message to Parents & Students */}
      <SchoolMessageSection />

      <Footer />
    </main>
  );
}