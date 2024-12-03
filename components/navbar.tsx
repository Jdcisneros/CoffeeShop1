"use client";

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import MenuListMobile from "./menu-list-mobile";
import ToggleTheme from "./toggle-theam";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";


function Navbar() {
  const router = useRouter();

  const cart = useCart();

  const {lovedItem} = useLovedProducts()


  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl ">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Coffee
        <span className="font-bold">Shop</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <MenuListMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </div>
        )}
        <div className="flex gap-1">

        <Heart
          strokeWidth={1}
          className={`cursor-pointer  ${lovedItem.length > 0 && 'fill-black dark:fill-white/80'}`}
          onClick={() => router.push("/loved-products")}
        />
        <span>{lovedItem.length}</span>
        </div>
        <User strokeWidth={1} className="cursor-pointer" />
        <ToggleTheme />
      </div>
    </div>
  );
}

export default Navbar;
