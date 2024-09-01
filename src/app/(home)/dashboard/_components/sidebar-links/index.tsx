"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  path: string;
};

const SidebarLinks = (props: Props) => {
  const urlPath = usePathname();
  const { path, title } = props;
  const isActive = urlPath === props.path ? true : false;
  return (
    <Link
      href={path}
      className={`text-sm text-center rounded-md py-[0.3rem] w-full  text-crusta-950 hover:bg-gray-100 ${
        isActive && "bg-crusta-100"
      }`}
    >
      {title}
    </Link>
  );
};

export default SidebarLinks;
