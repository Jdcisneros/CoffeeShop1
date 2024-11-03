/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import Iconbutton from "./icon-button";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();

  const router = useRouter();
  console.log(result);
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProductType) => {
              const { attributes, id } = product;
              console.log("este es el product", product);
              const { slug, images, productName, taste, origin } = attributes;
              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group w-80"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2 ">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                          alt="image Featured"
                          className="w-full"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0  group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6 ">
                            <Iconbutton
                              onClick={() => router.push(`products/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600 hover:scale-125"
                            />
                            <Iconbutton
                              onClick={() => console.log("add item")}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600 hover:scale-125"
                            />
                          </div>

                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-3 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>

                        <div className=" flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{taste}</p>
                          <p className="px-2 py-1 text-white bg-yellow-900 rounded-full" >{origin}</p>

                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}

        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex"/>
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
