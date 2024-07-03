import { Metadata } from "next";
import { ProductContet } from "./ProductContent";
import { searchService } from "@/services/search.service";

type Props = {
  productId: string;
};

export const ProductWrapper = async ({ productId }: Props) => {
  
    const product:any = await searchService.product(productId);
    
    if(!product?.error){
      return (
        <>
          <ProductContet product={product.item} />
        </>
      );
    }

    return(<><h2>Producto no encontrado</h2></>)
   
  
  
};
