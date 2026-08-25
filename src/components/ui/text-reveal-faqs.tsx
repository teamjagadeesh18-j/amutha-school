"use client";

import { TextEffect } from '@/components/core/text-effect';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Where is Amutha Matriculation School situated?',
      answer: 'We are located on Main Road, Avadi, Chennai, offering a convenient and central location for students across Avadi.',
    },
    {
      id: 'item-2',
      question: 'What academic levels are available at Amutha Matriculation School?',
      answer: 'We provide education from Kindergarten through Class 10 under the Tamil Nadu State Board Matriculation system.',
    },
    {
      id: 'item-3',
      question: 'What academic support is provided for board exam students?',
      answer: 'We conduct regular revision tests, mock board examinations, individual student counseling, and expert subject guidance.',
    },
    {
      id: 'item-4',
      question: 'What co-curricular activities are available for students?',
      answer: 'Students participate in sports events, art exhibitions, literary competitions, dance, drama, and yoga sessions.',
    },
    {
      id: 'item-5',
      question: 'How do I begin the admission process for my child?',
      answer: 'Parents can fill out the admission inquiry form on our website or visit our main office in Avadi for direct counselor assistance.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#ffffff] border-t border-[#e2e8f0] font-body">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1 rounded-[16px] bg-[#eeeffc] text-[#5e6ad2] border border-[#e2e8f0] text-xs font-semibold tracking-wide uppercase font-body mb-3">
              HELP & ADMISSIONS
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#0f172a] text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#475569] mt-4 text-balance text-base md:text-lg">
              Everything you need to know about Amutha Matriculation School.
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#475569] mt-6 hidden md:block text-sm">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#connect"
                className="text-[#5e6ad2] font-semibold hover:underline"
              >
                admissions support team
              </Link>{' '}
              for assistance.
            </TextEffect>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#e2e8f0]">
                  <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-[#0f172a] hover:text-[#5e6ad2] hover:no-underline font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#475569]">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#475569] mt-6 md:hidden text-sm">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="#connect"
              className="text-[#5e6ad2] font-semibold hover:underline">
              admissions team
            </Link>
          </TextEffect>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <div className="w-full pt-1">
      <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm md:text-base text-[#475569] leading-relaxed break-words whitespace-normal font-body"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </TextEffect>
    </div>
  );
};
