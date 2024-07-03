import { Product } from "@/Models/Product.interface";
import Style from "./product.module.scss";
import Image from "next/image";
import { numberFormat } from "@/helper/helper";
import { Condition } from "@/components/condition/Condition";

type Props = {
  product: Product;
};

export const ProductContet = ({ product }: Props) => {
  return (
    <div className={Style.product}>
      <div className={Style.content}>
        <div>
          <Image
            width={200}
            height={200}
            src={product.picture}
            alt={product.title}
            className={Style.contentImage}
          />
        </div>
        <div>
          <h3 className={Style.contentTitle}>Descripción del producto</h3>

          <p className={Style.contentDescription}>{product.description}</p>
        </div>
      </div>
      <div className={Style.buyProduct}>
        <div className={Style.buyProductsold}>
          <span>
            <Condition condition={product.condition} /> - {product.sold_quantity} vendidos
          </span>
        </div>
        <div>
          <h1 className={Style.buyProductTitle}>{product.title}</h1>
        </div>
        <div className={Style.buyProductAmountContent}>
          <span className={Style.buyProductAmount}>
            $ {numberFormat(product.price.amount, 0, ",", ".")}
          </span>
          <sup className={Style.buyProductAmountSup}>00</sup>
        </div>
        <div>
          <button className={Style.buyProductBtn} type="button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
