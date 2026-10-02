"use client";

import AboutSection from "@/components/aboutSection";
import BarberSection from "@/components/barberSection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PiercingSection from "@/components/piercingSection";
import TattooSection from "@/components/tattooSection";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function Home() {
  const t = useTranslations('breath-sections')

  return (
    <main className="overflow-hidden">
      <button
        id="Anywhere_button_iframe"
        type="button"
        className="anywhere-book-now-button"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          padding: "12px 18px",
          fontSize: "14px",
          fontWeight: 600,
          borderRadius: "6px",
          cursor: "pointer",
          position: "fixed",
          right: 0,
          top: "25%",
          zIndex: 9999,
          transform: "translate(30%, 0) rotate(-90deg)",
        }}
        data-booking-url="https://stgsaloon.setmore.com"
        data-new-tab="true"
      >
        Book now
      </button>
      <div id="inicio" className="scroll-mt-5">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
      </div>
      <div id="studio" className="scroll-mt-5">
        <Suspense fallback={null}>

        <AboutSection />
        </Suspense>
      </div>
      <div id="barbearia" className="scroll-mt-5">
        <BarberSection />
      </div>
      <motion.div 
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-28 px-8 md:px-16 text-right">
        <h3 className="text-4xl">
          {t('section-01.f-line-text')}{" "}
          <span className="font-medium">
           {t('section-01.s-line-text')}
            <br /> {t('section-01.t-line-text')}
          </span>
        </h3>
      </motion.div>
      <div id="tattoos" className="scroll-mt-5">
        <TattooSection />
      </div>
      {/* <motion.div 
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} className="py-28 px-8 md:px-16 text-left">
        <h3 className="text-4xl">
          Cada detalhe conta. <br />
          <span className="font-medium">Eleve sua aparência</span> com confiança
          e atitude.
        </h3>
      </motion.div>
      <div id="estetica" className="scroll-mt-5">
        <Suspense fallback={null}>

        <EsteticaSection />
        </Suspense>
      </div> */}
      <motion.div 
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} className="py-28 px-8 md:px-16 text-right">
        <h3 className="text-4xl">
         {t('section-02.f-line-text')}
          <br />{" "}
          <span className="font-medium">{t('section-02.s-line-text')}</span>.
        </h3>
      </motion.div>
      <div id="piercings" className="scroll-mt-5">
        <PiercingSection />
      </div>
      <Footer />
    </main>
  );
}
