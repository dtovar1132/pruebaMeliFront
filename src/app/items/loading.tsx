import { CardItemSkeleton } from "@/components/skeleton/cardItemSkeleton/CardItemSkeleton";

export default function Loading() {
  
    const items = [1,2,3]
  return (
    <>
      {items.map(sk => {
        return <CardItemSkeleton key={sk} />
      })}
    </>
  );
}
