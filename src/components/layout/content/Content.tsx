import Style from "./content.module.scss";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className={Style.main}>
        <div className={Style.content}>{children}</div>
      </main>
    </>
  );
};

export default Content;
