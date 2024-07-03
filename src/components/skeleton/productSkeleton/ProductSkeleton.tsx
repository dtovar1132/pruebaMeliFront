import Style from "./productSkeleton.module.scss";

export const ProductSkeleton = () => {
  return (
    <div className={Style.product}>
      <div className={Style.content}>
        <div className={Style.contentImage}></div>
        <div>
          <h3 className={Style.contentTitle}></h3>

          <p className={Style.contentDescription}></p>
        </div>
      </div>
      <div className={Style.buyProduct}>
        <div className={Style.buyProductsold}></div>
        <div>
          <h1 className={Style.buyProductTitle}></h1>
        </div>
        <div className={Style.buyProductAmountContent}>
          <span className={Style.buyProductAmount}></span>
        </div>
        <div></div>
      </div>
    </div>
  );
};
