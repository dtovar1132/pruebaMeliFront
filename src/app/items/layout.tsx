
import BreadcrumbContextProvider from "@/Providers/breadcrumb.provider";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import Style from './page.module.scss'



export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbContextProvider>
        <Breadcrumb />
        <div className={Style.content}>
          {children}
        </div>
      </BreadcrumbContextProvider>
    </>
  );
}
