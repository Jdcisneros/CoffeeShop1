"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarroucel = [
  {
    id: 1,
    title: "Envío a Todo el País",
    description:
      "Nuestro café a la puerta de tu casa. Obtén más información y únete.",
    link: "#!",
  },
  {
    id: 2,
    title: "Café de Origen",
    description:
      "Descubre nuestra selección de cafés de origen único, cultivados con pasión.",
    link: "#!",
  },
  {
    id: 3,
    title: "Accesorios Esenciales",
    description:
      "Todo lo que necesitas para preparar el café perfecto en casa.",
    link: "#!",
  },
  {
    id: 4,
    title: "Suscripción de Café",
    description:
      "Recibe tus cafés favoritos en la puerta de tu casa cada mes. ¡Suscríbete ahora!",
    link: "#!",
  },
  {
    id: 5,
    title: "Promociones Especiales",
    description:
      "Aprovecha nuestras ofertas exclusivas y descubre nuevos sabores.",
    link: "#!",
  },
];

function Carrousel() {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-neutral-950">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarroucel.map(({ id, title, description, link }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Carrousel;
