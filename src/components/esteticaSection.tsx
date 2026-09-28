"use client";

import Image from "next/image";

import esteticaSectionImg from "@/data/imgs/img-section-03.jpg";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion } from "./ui/accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";

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

export default function EsteticaSection() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row w-full gap-5 md:items-center"
    >
      {/* Imagem */}
      <motion.div
        variants={itemVariantsLeft}
        className="relative w-full md:w-[50%]"
      >
        <Image
          src={esteticaSectionImg}
          alt="Estética"
          quality={100}
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute bottom-5 right-5 text-white text-6xl">
          Estética
        </span>
      </motion.div>

      {/* Conteúdo */}
      <motion.div
        variants={itemVariantsRight}
        className="bg-gray-100 w-full md:w-[50%] flex flex-col gap-8 py-10 px-8 justify-center md:px-20 md:rounded-tl-2xl md:rounded-l-2xl"
      >
        <motion.div
          variants={itemVariantsRight}
          className="flex flex-col gap-4"
        >
          <h3 className="text-3xl">
            Elevamos a autoestima <br />
            com técnica e paixão.
          </h3>
          <p>
            Realçamos a sua beleza com cuidado, unindo inovação e sofisticação
            para destacar a sua melhor versão.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariantsRight}
          className="flex flex-col gap-5 justify-center"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="limpeza-de-pele">
              <AccordionTrigger>Limpeza de pele</AccordionTrigger>
              <AccordionContent>
                A limpeza de pele é um procedimento que visa higienizar
                profundamente a pele, removendo cravos, impurezas, células
                mortas e o excesso de oleosidade, ajudando a desobstruir os
                poros, prevenir acne e melhorar a absorção de cosméticos,
                promovendo uma aparência mais saudável, limpa e revitalizada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="design-de-sobrancelhas">
              <AccordionTrigger>Design de sobrancelhas</AccordionTrigger>
              <AccordionContent>
              Design de sobrancelhas é a arte de harmonizar o formato das sobrancelhas com o rosto, realçando a beleza e a expressão natural.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dermaplaning">
              <AccordionTrigger>Dermaplaning</AccordionTrigger>
              <AccordionContent>
              Dermaplaning é uma técnica de esfoliação facial com lâmina de bisturi que remove células mortas, pelos finos e impurezas da pele, deixando o rosto mais suave, renovado e com uma aparência mais luminosa e uniforme.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brow-lamination">
              <AccordionTrigger>Brow lamination</AccordionTrigger>
              <AccordionContent>
              Brow lamination é um tratamento que alinha e define os fios das sobrancelhas, proporcionando um efeito mais cheio, volumoso e duradouro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div variants={itemVariantsRight}>
          <Button
                asChild
                variant="outline"
                className="mt-5 text-md border-black text-black cursor-pointer"
              >
                <Link href={"https://wa.link/n1x966"} target="_blank">
                  Marcar horário <MessageCircle />
                </Link>
              </Button>
        </motion.div>
      </motion.div>

      {/* <Suspense fallback={null}>
        <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
      </Suspense> */}
    </motion.section>
  );
}
