import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import MainLayout from "../component/MainLayout";
import { client } from "../lib/contentful";
import Features from "@/component/Features";
// import { useRouter } from "next/navigation";

export const getVideoUrl = async () => {
  const response = await client.getEntries({ content_type: "heroSection" });
  return response?.items[0]?.fields?.videoLink;
};

export const getCompanyImages = async () => {
  const response = await client.getEntries({ content_type: "helperCompanies" });
  return response.items;
};

export const getFeature = async () => {
  const response = await client.getEntries({ content_type: "features" });
  // console.log(response.items[1]?.fields);
  return response.items;
};
export default async function Home() {
  const videoUrl = await getVideoUrl();
  const companyImage = await getCompanyImages();
  const companyImages = [...companyImage, ...companyImage, ...companyImage];
  const features = await getFeature();
  features.reverse();

  // const router = useRouter();
  return (
    <MainLayout>
      <div className="basic-container gap-0 p-0">
        <div className="basic-container gap-[40px] lg:gap-[98px] pt-[120px] lg:pt-[138px] px-[40px] lg:px-[96px]">
          <div className="basic-container gap-[28px] max-w-[600px] overflow-visible p-0 mx-auto text-center ">
            <span className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-center">
              Build, Evaluate and Improve Prompts 10x faster
            </span>
            <span className="text-[#8E8E94] text-[1rem]">
              Empower your team to build, evaluate, and deploy high-performing
              prompts for LLM-based applications. Pype streamlines
              collaboration, version control, and performance analysis, helping
              you deliver reliable AI solutions faster.
            </span>
          </div>
          <div className="flex-none h-[150px] md:h-[350px] lg:h-[516px] relative w-[300px] md:w-[600px] lg:w-[804px]">
            <article className="relative w-full h-full rounded-[19px] cursor-pointer overflow-hidden translate-z-000001">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </article>
          </div>
          <div
            style={{ opacity: "1", transform: "none" }}
            className="grid flex-none gap-[12px] md:gap-[20px] auto-rows-fr grid-cols-2 grid-rows-1 h-[56px] justify-center overflow-hidden p-[6px] relative w-[445px]"
          >
            <div className="self-end md:self-start h-full justify-self-end md:justify-self-start relative w-[150px] md:w-[207px]">
              <a
                href="https://app.pypeai.com/"
                className="h-full w-full cursor-pointer rounded-lg bg-[#2F2F2F] dark:bg-lightBackground text-[#DEDEDE] dark:text-lightText shadow-md content-center items-center flex justify-center flex-wrap overflow-hidden px-[16px] py-[10px] relative no-underline"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 2px 6px 1px, rgb(28, 28, 28) 0px 0px 0px 1px",
                  opacity: "1",
                  willChange: "auto",
                }}
              >
                <span className="text-[12px] md:text-[16px]">Launch App</span>
              </a>
            </div>
            <div className="md:self-start h-full md:justify-self-start relative w-[150px] md:w-[207px]">
              <a
                href=""
                className="h-full w-full cursor-pointer rounded-lg bg-[#2563EB] text-white shadow-md content-center items-center flex justify-center flex-wrap overflow-hidden px-[16px] py-[10px] relative no-underline"
              >
                <span className="flex items-center gap-1 md:gap-2 text-[12px] md:text-[16px]">
                  Book a demo <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="basic-container gap-[10px] py-[40px] px-[96px]">
          <div className="basic-container gap-[32px] max-w-[1440px] overflow-visible p-0">
            <p className="outline-none flex flex-col justify-start flex-shrink-0 opacity-100 text-[18px] mx-auto text-center">
              Helping individuals and teams at the world's best companies
            </p>
            <div className="flex-none h-[61px] relative flex w-full max-w-full place-items-center opacity-100 list-none mask overflow-hidden ">
              <ul className="flex w-full h-full max-w-full max-h-full dark:bg-white place-items-center list-none m-0 p-0 gap-[80px] relative will-change-transform -translate-x-0 animation">
                {companyImages.map((image, i) => (
                  <li key={i}>
                    <div className="h-[67px] relative w-[211px]">
                      <Image
                        src={`https:${image?.fields?.companyImage?.fields?.file?.url}`}
                        className="absolute inset-0 w-full h-full rounded-none"
                        width={211}
                        height={67}
                        alt="companyImage"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="basic-container gap-[80px] justify-start px-[40px] lg:px-[96px] py-[38] lg:py-[80px]">
          <div className="basic-container gap-[41px] max-w-[1440px] p-0">
            <div className="basic-container gap-[20px] max-w-[640px] p-0">
              <div className="gap-[12px] overflow-visible feature flex flex-row justify-center items-center h-min text-[16px] dark:text-black">
                <BsStars />
                <span>Features</span>
              </div>
              <div className="outline-none flex flex-col justify-start shrink-0 transform-none flex-none h-auto relative w-full">
                <h4 className="text-center text-2xl md:text-3xl">
                  Turbocharge your LLM apps development
                </h4>
              </div>
            </div>
            <div className="basic-container gap-[24px] md:gap-[32px] justify-start overflow-visible p-0">
              <div className="flex items-start flex-none flex-col md:flex-row flex-nowrap gap-[18px] md:gap-[26px] h-min justify-start overflow-visible p-0 relative w-full mb-[24px]">
                <div className="featureRow">
                  {features.slice(0, 3).map((feature, i) => (
                    <Features
                      key={i}
                      index={i}
                      id={feature?.fields?.id}
                      feature={feature?.fields?.featureTitle}
                      description={feature?.fields?.featureDescription}
                      media={feature?.fields?.featureMedia || null}
                    />
                  ))}
                </div>
                <div className="featureRow">
                  {features.slice(3).map((feature, i) => (
                    <Features
                      key={i + 3}
                      index={i + 3}
                      id={feature?.fields?.id}
                      feature={feature?.fields?.featureTitle}
                      description={feature?.fields?.featureDescription}
                      media={feature?.fields?.featureMedia || null}
                    />
                    // <div className="featureRowInside" key={i}>
                    //   {featureIcons[i + 3]}
                    //   <h4>{feature?.fields?.featureTitle}</h4>
                    //   <p>{feature?.fields?.featureDescription} </p>
                    //   {feature?.fields?.featureMedia && (
                    //     <Image
                    //       src={`https:${feature?.fields?.featureMedia?.fields?.file?.url}`}
                    //       width={400}
                    //       height={200}
                    //     />
                    //   )}
                    // </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

//                   <div className="featureRowInside">
{
  /* <CgSmartphoneChip className="size-8 md:size-12" />
<h4>Team collaboration</h4>
<p>
  Collaborate on a Notion-like interface to define your LLM
  app requirements. Attach docs, data, and examples to
  ensure your prompts achieve high precision results.
</p>
</div>
<div className="featureRowInside">
<FaWandMagicSparkles className="size-8 md:size-12" />
<h4>Effortless deployment</h4>
<p>Integrate Pype SDK in 4 lines of code.</p>
{/* <Image
  src="https://framerusercontent.com/images/xg2v3VcznHbHM8bdbn9OtRKXuI.png?lossless=1"
  width={200}
  height={200}
/> */
}
// </div>
// <div className="featureRowInside">
// <TbAppsFilled className="size-8 md:size-12" />
// <h4>Monitor deployed prompts</h4>
// <p>
//   Robust observability tools provide real-time metrics—
//   cost, latency, requests, accuracy and 10+ metrics.
// </p>
{
  /* <Image
  src="https://framerusercontent.com/images/ga0zUll3eJhtf14SmrGRAoHrtM.png"
  width={200}
  height={200}
/> */
}
//</div>
{
  /* <div className="featureRowInside">
<HiMiniComputerDesktop className="size-8 md:size-12" />
<h4>Accelerated prompt development</h4>
<p>
  Autogenerate your prompts and test examples. Compare
  selected prompts across models, parameters and prompt
  techniques.
</p>
</div>
<div className="featureRowInside">
<CgLoadbarSound className="size-8 md:size-12" />
<h4>Evaluate and Auto Optimize prompts</h4>
<p>
  Evaluate and pick the best performing prompt. Auto-Tune
  prompts to improve accuracy and consistency of the
  results.
</p>

</div>
<div className="featureRowInside">
<FaUserAltSlash className="size-8 md:size-12" />
<h4>No expertise required</h4>
<p>
  No need to learn 50+ prompting techniques to improve
  prompts.
</p>
</div> */
}
