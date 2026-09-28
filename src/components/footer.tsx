"use client";

import Image from "next/image";
import logo from "@/logos/Sting-logo_wb.png";
import {
  Calendar,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock,
} from "lucide-react";
import { Button } from "./ui/button";
import FormModal from "./formModal";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  const t = useTranslations("footer-btns");

  return (
    <>
      <div className="mt-16 bg-black px-8 md:px-16 py-20 flex justify-between flex-col md:flex-row gap-12 text-white">
        <div className="flex flex-col gap-8">
          <div>
            <Image src={logo} alt="Sting Studio" width={100} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <Clock size={18} />
              <p className="text-sm">
                {t("opening-hours")}
                <br />
                {t("closed-days")}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3">
                <Phone size={18} />
                <p className="text-sm">(+351) 915 003 454 </p>
              </div>
              <p className="text-xs">({t("phone-info")})</p>
            </div>
            <div className="flex gap-3">
              <Mail size={18} />
              <p className="text-sm">s4ttis@hotmail.com</p>
            </div>
            <div className="flex gap-3">
              <MapPin size={18} />
              <p className="text-sm">
                Rua João das Regras, 350 <br />
                Porto, Portugal 4000-291
              </p>
            </div>
          </div>
          <p className="text-xs text-white">
          &copy; {new Date().getFullYear()} - {t("copyright")}
        </p>
        </div>
        <div className="flex flex-col items-start md:items-end space-y-5">
          <div className="">
            <Button
              variant="secondary"
              className="text-md cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              {t("book-btn")}
              <Calendar />
            </Button>
          </div>
          <div className="flex space-x-5">
            <Link href={"https://wa.link/n1x966"} target="_blank">
            {/* https://wa.link/n1x966 */}
              <Button variant="outline">
                {t("contact-btn")}
                <MessageCircle />
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/Sting_studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="cursor-pointer">
                <Instagram size={24} />
              </Button>
            </Link>
          </div>
          <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
        </div>
        
      </div>
    </>
  );
}
