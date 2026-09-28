"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Euro, Hourglass, MessageCircle } from "lucide-react";
import { Service } from "@/hooks/appointments-context";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ServiceStepProps {
  services: Service[];
  selectedService: string;
  onSelectService: (serviceId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ServiceStep({
  services,
  selectedService,
  onSelectService,
  onNext,
  onBack,
}: ServiceStepProps) 
{
  const t = useTranslations('book-form')
  return (
    <Card className="bg-black text-card-foreground border-none p-0">
      <CardHeader className="items-center">
        <CardTitle className="flex flex-col gap-4 text-foreground">
          <p className="text-lg font-medium leading-tight">
            {t('service-step.title')}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="grid gap-2">
            {services.map((service: Service) => (
              <Button
                key={service._id}
                className={`py-16 px-4 bg-gray-900 text-foreground rounded-md border border-border hover:bg-accent hover:text-accent-foreground ${
                  selectedService === service._id
                    ? "bg-gray-500 text-accent-foreground hover:bg-gray-500"
                    : ""
                }`}
                onClick={() => onSelectService(service._id)}
              >
                <div className="w-full flex flex-col gap-2 items-start">
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-md text-wrap text-start line-clamp-3">{service.name}</div>
                    <div className="text-[10px] font-light">
                      <p className="text-wrap text-start line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 text-[16px] items-center">
                      <Euro size={16} /> {service.price}
                    </div>
                    <div className="flex gap-2 text-[14px] items-center">
                      <Hourglass size={14} /> {service.duration} min
                    </div>
                  </div>
                </div>
              </Button>
            ))}
            <Button
                key={"colour-service-01"}
                className={`py-12 px-4 bg-gray-900 text-foreground rounded-md border border-border hover:bg-accent hover:text-accent-foreground`}
              >
                <Link href={"https://wa.link/n1x966"} target="_blank" className="w-full flex flex-col gap-2 items-start">
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-md text-wrap text-start line-clamp-2">Coloração</div>
                    <div className="text-[10px] font-light">
                      <p className="text-wrap text-start line-clamp-2">
                      Apenas por consulta (Whatsapp)
                      </p>
                    </div>
                  </div>

                </Link>
              </Button>

          </div>
        </ScrollArea>
        <Button
          className="mt-10 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onNext}
          disabled={!selectedService}
        >
          {t('form-btns.next-step-btn')}
        </Button>
        <Button
          variant="ghost"
          className="mt-4 w-full text-foreground hover:bg-accent"
          onClick={onBack}
        >
          {t('form-btns.back-step-btn')}
        </Button>
      </CardContent>
    </Card>
  );
}


