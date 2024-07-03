'use client';
import { useState } from "react";
import Style from "./inputSeach.module.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";



export const InputSeacrh = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter()

  const searchQuery = (event:any) =>{
    if(event.key === 'Enter'){
      router.push(`/items?search=${query}`)
    }
  }



  return (
    <div className={Style.search}>
      <input
        type="text"
        className={Style.searchInput}
        placeholder="Nunca dejes de buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => { searchQuery(e)}}
      />
      <span className={Style.searchIcon}>
        <FaMagnifyingGlass />
      </span>
    </div>
  );
};
