import { ItemsWrapper } from "@/components/pages/items/ItemsWrappers";
import { Metadata } from "next";

export const generateMetadata = ({ searchParams }: any): Metadata => {
  return {
    title: "Resultados para " + searchParams.search,
    description: "Paginade resultado de busquedas",
  };
};


export default function Items({ searchParams }: any) {
  const { search } = searchParams;

  return (
    <>
      <ItemsWrapper search={search} />
    </>
  );
}
