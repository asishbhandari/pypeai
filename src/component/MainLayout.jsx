import Image from "next/image";
import { ImLinkedin } from "react-icons/im";
import ThemeComponent from "./ThemeComponent";
import { client } from "../lib/contentful";

async function fetchLogo() {
  const response = await client.getEntries({ content_type: "navbar" });
  return response?.items[0]?.fields?.logoImage?.fields?.file?.url;
}
const MainLayout = async ({ children }) => {
  const logoUrl = await fetchLogo();
  return (
    <div
      className={` min-h-[100vh] w-auto items-center dark:bg-darkBackground dark:text-darkText flex flex-col flex-nowrap gap-0 h-min justify-center overflow-hidden p-0 relative`}
    >
      <header className="flex-none h-[73px] fixed left-0 right-0 top-0 z-10 border-b-2 bg-white dark:bg-darkBackground dark:text-darkText">
        <nav
          className="flex justify-between items-center  flex-nowrap gap-[15px] overflow-visible px-[40px] lg:px-[96px] relative"
          style={{
            backdropFilter: "blur(30px)",
            height: "100%",
            width: "100%",
            opacity: "1",
            transform: "none",
          }}
        >
          <div className="flex justify-between gap-4 items-center ">
            <Image src={`https:${logoUrl}`} width={80} height={40} alt="logo" />
            <span>Pype AI</span>
          </div>
          <div className="flex gap-8 items-center text-[0.95rem]">
            <ThemeComponent />
            <div className="gap-8 items-center hidden lg:flex">
              <span className="cursor-pointer">Features</span>
              <span className="cursor-pointer rounded-lg bg-[#2F2F2F] dark:bg-lightBackground text-[#DEDEDE] dark:text-lightText px-4 py-2 shadow-md">
                Launch App
              </span>
            </div>
          </div>
        </nav>
      </header>
      <main className="basic-container dark:bg-darkBackground p-0 ">
        {children}
      </main>
      <footer className="flex-none h-auto relative w-full ">
        <div className="border-t-2 bg-[#FBFBFB] dark:bg-darkBackground dark:text-darkText w-full opacity-100 flex flex-nowrap h-min justify-between items-center overflow-hidden px-[40px] md:px-[96px] py-[40px]">
          <span className="text-sm">
            © Singularity Corp Pvt. Ltd. 2024. All rights reserved. Privacy
            Policy.
          </span>
          <span>
            <ImLinkedin />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
