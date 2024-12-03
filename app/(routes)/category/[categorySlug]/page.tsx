"use client";

import { useGetCategoryPorduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";

import { useParams } from "next/navigation";
import FiltersControlCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/productCard";
import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryPorduct(categorySlug);

  const [filterOrigin, setFilterOrigin] = useState("");
  
  // Asegurémonos de que loading sea true mientras esperamos datos
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (loading === false) {
      setIsLoading(false);
    }
  }, [loading]);  // El estado de isLoading cambiará cuando loading cambie
  
  const filteredPorducts =
    result !== null && !isLoading
      ? filterOrigin === ""
        ? result
        : result.filter(
            (product: ProductType) => product.attributes.origin === filterOrigin
          )
      : [];  // Si estamos cargando, no debemos pasar productos vacíos o null

  console.log(result);  // Para depuración

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !isLoading && (
        <h1 className="text-3xl font-medium">
          Cafe {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlCategory setFilterOrigin={setFilterOrigin} />
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {isLoading ? (
            <SkeletonSchema grid={3} />
          ) : (
            filteredPorducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}