"use client";
import { Product } from "@/Models/Product.interface";
import { ResponseListProduct } from "@/Models/Response.interface";
import { BreadcrumbContext } from "@/Providers/breadcrumb.provider";
import { CardItem } from "@/components/cardItem/CardItem";
import { useContext, useEffect } from "react";
import Style from "./itemsContent.module.scss";

type Props = {
  responseListProduts: ResponseListProduct;
};



export const ItemsContent = ({ responseListProduts }: Props) => {
  const { setCategories } = useContext(BreadcrumbContext);

  useEffect(() => {
    setCategories(responseListProduts.categories);
  }, [responseListProduts, setCategories]);

  return (
    <>
      {responseListProduts.items.map((product: Product) => (
        <div className={Style.card} key={product.id}>
          <CardItem product={product}  />
        </div>
      ))}
    </>
  );
};
