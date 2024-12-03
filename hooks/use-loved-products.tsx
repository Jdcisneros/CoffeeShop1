import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "./use-toast";


interface useLovedProductsType {
    lovedItem:ProductType[],
    addLoveItem: (data:ProductType) => void
    removeLovedItem: (id:number) => void
}

export const useLovedProducts = create(persist<useLovedProductsType>((set,get)=> ({
lovedItem:[],
addLoveItem:(data:ProductType) => {
    const currentLovedItem = get().lovedItem;
    const existingItem = currentLovedItem.find((item)=> item.id === data.id)
    if(existingItem) {
        return toast({
            title: "El producto ya esta en la lista",
            variant: "destructive"
        })
    }
    set({
        lovedItem:[...get().lovedItem, data]
    })
    toast({
        title:"Producto añadido a la lista"
    })
},
removeLovedItem: (id: number) => {
    set({
      lovedItem: get().lovedItem.filter((item) => item.id !== id),
    });
    toast({
      title: "Producto eliminado de la lista",
    });
  },
}),{
    name:"loved-products-storage",
    storage:createJSONStorage(()=> localStorage)
}
)
);