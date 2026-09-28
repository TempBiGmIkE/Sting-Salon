"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import { delay, motion } from "framer-motion";

import piercingSectionImg from "@/data/imgs/img-section-04.jpg";
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

export default function PiercingSection() {
  const t = useTranslations('piercing-section')

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row w-full gap-5"
    >
      {/* Imagem */}
      <motion.div
        variants={itemVariantsLeft}
        className="relative w-full md:w-[50%]"
      >
        <Image
          src={piercingSectionImg}
          alt="Piercings"
          quality={100}
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute bottom-5 left-5 text-white text-6xl">
          {t('section-title')}
        </span>
      </motion.div>

      {/* Conteúdo */}
      <motion.div
        variants={itemVariantsRight}
        className="bg-gray-100 w-full md:w-[50%] flex flex-col gap-8 py-20 px-8 justify-center md:px-20 order-last md:rounded-tr-2xl md:rounded-r-2xl"
      >
        <motion.div
          variants={itemVariantsRight}
          className="flex flex-col gap-5"
        >
          <h3 className="text-3xl">
            {t('f-line-title')} <br />
            {t('s-line-title')}
          </h3>
          <p>
            {t('description')}
          </p>
        </motion.div>

        <motion.div variants={itemVariantsRight} className="flex gap-5">
          <Button
            asChild
            variant="outline"
            className="mt-5 text-md border-black text-black cursor-pointer"
          >
            <Link href={"https://wa.link/n1x966"} target="_blank">
            {t('piercing-book-btn')} <MessageCircle />
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="mt-5 text-md border-black text-black cursor-pointer"
          >
            <Link href={"https://www.instagram.com/Sting_studio/"} target="_blank">
              Instagram <Instagram />
            </Link>
          </Button>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
