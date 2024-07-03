import { Product } from "@/Models/Product.interface";
import Style from "./cardItem.module.scss";
import Image from "next/image";
import { AiOutlineCar } from "react-icons/ai";
import Link from "next/link";
import { numberFormat } from "@/helper/helper";
import { Condition } from "../condition/Condition";

type Props = {
  product: Product;
};

export const CardItem = ({ product }: Props) => {
  return (
    <Link href={`/items/${product.id}`} className={Style.cardItem}>
      <div className={Style.cardItemImage}>
        <Image
          src={product.picture}
          alt={product.title}
          aria-label={product.title}
          width={100}
          height={100}
        />
      </div>
      <div className={Style.cardItemContent}>
        <div className={Style.amount}>
          <p>$ {numberFormat(product.price.amount,2,',','.')}</p>
           {product.free_shipping ? <span className={Style.free}><AiOutlineCar /></span>: null}
        </div>
        <p className={Style.title}>{product.title}</p>
        <p className={Style.condition}><Condition condition={product.condition} /></p>
      </div>
      <div className={Style.location}>
        <p>Capital Federal</p>
      </div>
    </Link>
  );
};
