"use client";

import Image from "next/image";
import tattooSectionImg from "@/data/imgs/img-section-tattoo.jpeg";
import { Button } from "./ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function TattooSection() {

  const t = useTranslations('tattoo-section')

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row w-full gap-5"
    >
      {/* Container da imagem */}
      <motion.div
        variants={itemVariantsLeft}
        className="relative w-full md:w-[50%]"
      >
        <Image src={tattooSectionImg} alt="Tattoo" quality={100} className="w-full h-full object-cover object-center" />
        <span className="absolute bottom-5 left-5 text-white text-6xl">
          {t('section-title')}
        </span>
      </motion.div>

      {/* Container de conteúdo */}
      <motion.div
        variants={itemVariantsRight}
        className="bg-gray-100 w-full md:w-[50%] flex flex-col gap-8 py-20 px-8 justify-center md:px-20 order-last md:order-first md:rounded-tr-2xl md:rounded-r-2xl"
      >
        <motion.div
          variants={itemVariantsRight}
          className="flex flex-col gap-5"
        >
          <h3 className="text-3xl">
            {t('f-line-title')}
            <br />
            {t('s-line-title')}
            <br /> {t('t-line-title')}
          </h3>
          <p>
            {t('description')}
          </p>
        </motion.div>

        <motion.div variants={itemVariantsRight} className="flex flex-col gap-6">
          <div className="flex flex-col md:items-baseline md:gap-2">
            <div className="flex flex-col gap-2 border-l-2 border-black pl-4">
            <p className="text-sm font-semibold uppercase tracking-wide">Brenda Turin — Guest</p>
            <p className="text-sm text-gray-600">
              A Brenda estará a tatuar como convidada na Sting Studio por tempo limitado.
              Aproveita para marcares a tua sessão com ela diretamente.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-2 text-md border-black text-black cursor-pointer w-fit"
            >
              <Link href={"https://breturintatua.carrd.co/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"} target="_blank">
                Orçamento Brenda <MessageCircle />
              </Link>
            </Button>
          </div>
          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wide">Tati Zaqui - Tattoo & piercing</p>
          </div>
            <div className="flex items-center">
              <Button
                asChild
                variant="outline"
                className="mt-2 text-md border-black text-black cursor-pointer"
              >
                <Link href={"https://wa.link/n1x966"} target="_blank">
                  {t('tattoo-book-btn')} <MessageCircle />
                </Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="mt-2 text-md border-black text-black cursor-pointer"
              >
                <Link
                  href={"https://www.instagram.com/Sting_studio/"}
                  target="_blank"
                >
                  Instagram <Instagram />
                </Link>
              </Button>
            </div>
          </div>

          
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
