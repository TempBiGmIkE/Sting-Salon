import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import AppointmentsProviderWrapper from "@/hooks/appointmentsProviderWrapper";
import PopupBanner from "@/components/popupBanner";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "sonner";
import {
  ConsentManagerProvider,
  CookieBanner,
  ConsentManagerDialog,
} from "@c15t/nextjs";
import { NextIntlClientProvider } from "next-intl";

const bricolageFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sting Studio - Barbearia, Tattoo, Estética e Piercings",
    template: "%s | Sting Studio",
  },
  description: "Barbearia, Tattoo, Estética e Piercings",
  keywords: [
    "barbearia",
    "barber",
    "tattoo",
    "tatuagem",
    "estética",
    "piercings",
    "barbeiro Porto",
    "tatuador Porto",
    "salão beleza Porto",
  ],
  authors: [{ name: "Sting Studio" }],
  creator: "Sting Studio",
  publisher: "Sting Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="canonical" href="https://Sting.me" />
      </head>
      <body
        className={`${bricolageFont.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="setmore-book-now-script"
          src="https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js"
          strategy="afterInteractive"
        />
        <ConsentManagerProvider
          options={{
            mode: "c15t",
            backendURL: "/api/c15t",
            consentCategories: ["necessary", "marketing"],
            ignoreGeoLocation: true,
          }}
        >
          <CookieBanner
            theme={{
              "banner.footer.accept-button": {
                className:
                  "bg-primary text-white p-2 rounded-md cursor-pointer",
                noStyle: true,
              },
              "banner.footer.customize-button": {
                className:
                  "border border-black text-sm text-black p-2 rounded-md cursor-pointer",
                noStyle: true,
              },
              "banner.footer.reject-button": {
                className:
                  "border border-black text-sm text-black p-2 rounded-md cursor-pointer",
                noStyle: true,
              },
            }}
            trapFocus={false}
          />
          <ConsentManagerDialog />

          <AppointmentsProviderWrapper>
            <NextIntlClientProvider>
              <Header />
              {children}
              <Toaster />
              <PopupBanner />
            </NextIntlClientProvider>
            <Analytics />
          </AppointmentsProviderWrapper>
        </ConsentManagerProvider>
      </body>
    </html>
  );
}
