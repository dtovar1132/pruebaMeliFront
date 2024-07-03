import Image from "next/image";
import Style from "./header.module.scss";
import { InputSeacrh } from "./search/InputSearch";
import Link from "next/link";

export const Header = async () => {
  return (
    <>
      <header className={Style.header}>
        <div className={Style.headerContent}>
          <div className={Style.headerLogo}>
            <Link href="/">
              <Image
                src={"/images/logo.svg"}
                width={50}
                height={50}
                alt="algo"
              />
            </Link>
          </div>
          <div className={Style.headerInput}>
            <InputSeacrh />
          </div>
        </div>
      </header>
    </>
  );
};
