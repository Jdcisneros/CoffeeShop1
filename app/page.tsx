import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-products";
import Carrousel from "@/components/carrousel";
import ChooseCategry from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";


export default function Home() {
  return (
    <main>
      <Carrousel/>
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategry />
      <BannerProduct/>
    </main>
   
  );
}
