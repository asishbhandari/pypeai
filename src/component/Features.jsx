import { CgSmartphoneChip } from "react-icons/cg";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbAppsFilled } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { CgLoadbarSound } from "react-icons/cg";
import { FaUserAltSlash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Features = ({ id, index, feature, description, media }) => {
  const featureIcons = [
    <CgSmartphoneChip className="size-8 md:size-12" />,
    <FaWandMagicSparkles className="size-8 md:size-12" />,
    <TbAppsFilled className="size-8 md:size-12" />,
    <HiMiniComputerDesktop className="size-8 md:size-12" />,
    <CgLoadbarSound className="size-8 md:size-12" />,
    <FaUserAltSlash className="size-8 md:size-12" />,
  ];
  return (
    <Link href={`/${id}`} className="featureRowInside">
      {featureIcons[index]}
      <h4>{feature}</h4>
      <p>{description} </p>
      {media && (
        <Image
          src={`https:${media?.fields?.file?.url}`}
          width={400}
          height={200}
          alt="feature image"
        />
      )}
    </Link>
  );
};

export default Features;
