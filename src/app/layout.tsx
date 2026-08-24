
import type { Metadata } from 'next';
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LenisSmoothScroll } from '@/components/ui/lenis-smooth-scroll';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Amutha Matriculation School | Krishna Nagar, Thiruninravur',
  description: 'Amutha Matriculation School in Krishna Nagar, Thiruninravur offers honest, accessible matriculation education for every family in the local community.',
  keywords: ['Amutha Matriculation School', 'Thiruninravur school', 'affordable matriculation school Chennai'],
  alternates: {
    canonical: 'https://amuthamatric.edu.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'School'],
  name: 'Amutha Matriculation School',
  url: 'https://amuthamatric.edu.in',
  telephone: '+919942892228',
  email: 'amuthamatric.thiruninravur@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Krishna Nagar, Chennai–Tiruvallur High Road',
    addressLocality: 'Thiruninravur',
    addressRegion: 'Tamil Nadu',
    postalCode: '60',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.12369,
    longitude: 80.04404,
  },
  hasMap: 'https://maps.google.com/?q=13.12369,80.04404',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${jakarta.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#FFF7FB] text-[#57534E] antialiased min-h-screen">
        <SmoothScrollProvider>
        <LenisSmoothScroll>
          {children}
          <WhatsAppFloat />
        </LenisSmoothScroll>
              </SmoothScrollProvider>
</body>
    </html>
  );
}