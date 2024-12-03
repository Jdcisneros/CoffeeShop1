import { Skeleton } from "./ui/skeleton";

type SkeletonSchemaProps = {
  grid: number;
};

const SkeletonSchema = ({ grid }: SkeletonSchemaProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Espaciado adecuado */}
      {Array.from({ length: grid }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 mx-auto space-y-3"  // Espaciado ajustado
        >
          {/* Skeleton del producto */}
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />

          {/* Skeleton de texto */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-200" />
            <Skeleton className="h-4 w-[200px] bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonSchema;
