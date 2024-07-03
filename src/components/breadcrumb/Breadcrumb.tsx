"use client";
import { BreadcrumbContext } from "@/Providers/breadcrumb.provider";
import { useContext } from "react";
import Style from './breadcrum.module.scss'

export const Breadcrumb = () => {
  const { categories } = useContext(BreadcrumbContext);
  return (
    <ul className={Style.breadcrumb}>
      {categories?.slice(0,5).map((category: string, index: number) => {
        return <li key={index} className={Style.breadcrumbItem}>{category}</li>;
      })}
    </ul>
  );
};
