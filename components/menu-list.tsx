"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const cafes: { title: string; href: string; description: string }[] = [
  {
    title: "Café en Grano",
    href: "/category/grano",
    description:
      "Café sin procesar, ideal para quienes buscan un sabor auténtico y fresco.",
  },
  {
    title: "Café Molido",
    href: "/category/molido",
    description:
      "Café listo para preparar, ideal para una preparación rápida y práctica.",
  },
  {
    title: "Café en Cápsula",
    href: "/category/capsula",
    description:
      "Café en cápsulas para una preparación sencilla y sin complicaciones, con variedad de sabores.",
  },
];

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 hover:bg-neutral-600/50">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Coffee Shop
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Tu rincón de café, donde la calidad y el sabor se unen.
                      Disfruta de granos frescos, café molido y cápsulas en un
                      ambiente acogedor. ¡Ven y vive la experiencia!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda" className="hover:bg-neutral-600/50">
                Accede a la tu informacion, pedidos y mucho mas.
              </ListItem>
              <ListItem href="/offers" title="Ofertas" className="hover:bg-neutral-600/50">
                Promociones y ofertas que existen en nuestra tienda
              </ListItem>
              <ListItem href="/accesories" title="Acessorios" className="hover:bg-neutral-600/50">
                Todo lo necesario para disfrutar del café en casa. Desde
                molinillos hasta tazas elegantes, encuentra lo esencial para
                preparar tu bebida perfecta.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {cafes?.map((cafe) => (
                <ListItem key={cafe.title} title={cafe.title} href={cafe.href} className="hover:bg-neutral-600/50">
                  {cafe.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/acessories" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;
