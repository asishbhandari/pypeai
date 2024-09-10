import Features from "@/component/Features";
import MainLayout from "@/component/MainLayout";
import { getSingleFeature } from "@/lib/utils";

const Info = async ({ params }) => {
  const data = await getSingleFeature(params.id);
  return (
    <MainLayout>
      <div className="flex justify-center items-center py-[80px] px-[30px] ">
        <Features
          index={data?.id - 1}
          id={data?.id}
          feature={data?.featureTitle}
          description={data?.featureDescription}
          media={data?.featureMedia || null}
        />
      </div>
    </MainLayout>
  );
};

export default Info;
