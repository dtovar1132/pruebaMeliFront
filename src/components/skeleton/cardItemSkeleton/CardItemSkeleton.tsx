import Style from "./cardItemSkeleton.module.scss";

export const CardItemSkeleton = () => {
  return (
    <div className={Style.cardItem}>
      <div className={Style.cardItemImage}></div>
      <div className={Style.cardItemContent}>
        <div className={Style.amount}>
          <p></p>
        </div>
        <p className={Style.title}></p>
        <p className={Style.condition}></p>
      </div>
      <div className={Style.location}>
        <p></p>
      </div>
    </div>
  );
};
