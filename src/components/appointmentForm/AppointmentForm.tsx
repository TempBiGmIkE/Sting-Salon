"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function AppointmentForm() {
  const t = useTranslations("footer-btns");

  const openSetmoreBooking = () => {
    document.getElementById("Anywhere_button_iframe")?.click();
  };

  return (
    <div className="flex w-full flex-col justify-center rounded-md bg-black p-4 pt-8 text-foreground">
      <Button
        type="button"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={openSetmoreBooking}
      >
        {t("book-btn")}
      </Button>
    </div>
  );
}