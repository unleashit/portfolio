import { ReactNode } from 'react';
import { Metadata } from 'next';
import GlobalState from '@/components/providers';
import MobileNavigation from '@/components/mobileNavigation/mobileNavigation';
import Navigation from '@/components/navigation/navigation';
import { Oswald, Sanchez } from 'next/font/google';
import {
  ASSETS_URL,
  META_DEFAULT_DESC,
  META_DEFAULT_TITLE,
} from '@/lib/constants';
const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oswald',
});
import '@/assets/scss/global.scss';

const sanchez = Sanchez({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sanchez',
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${sanchez.variable}`}>
      <body>
        {/* HACK since NextJS metatdata api doesn't currently support <link /> */}
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href={`${ASSETS_URL}/a9824768-3995-46a6-a3c8-5a5689778498/header-image.webp?format=webp`}
          type="image/webp"
        />

        <GlobalState>
          <MobileNavigation>
            {/* @ts-expect-error Server Component */}
            <Navigation template="hamburger" ulClass="responsiveNav" />
          </MobileNavigation>

          {children}
        </GlobalState>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: META_DEFAULT_TITLE,
    template: '%s | Jason Gallagher',
  },
  description: META_DEFAULT_DESC,
  alternates: {
    canonical: 'https://jasongallagher.org',
  },
};
