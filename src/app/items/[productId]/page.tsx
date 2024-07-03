import { ProductWrapper } from "@/components/pages/items/product/ProductWrapper";
import { searchService } from "@/services/search.service";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { productId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productId = params.productId
  const product: any = await searchService.product(productId)
  if(!product?.error){
    return {
      title: product.item.title,
      description: product.item.title
    }
  }

  return {
    title: "producto no encontrado"
  }
  
}

export default function Product({ params }: Props) {
  const { productId } = params;
  return (
    <>
      <ProductWrapper productId={productId} />
    </>
  );
}
