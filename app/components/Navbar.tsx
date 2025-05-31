import Link from "next/link";
import { GithubIcon } from "../icons/Github";
import { Logo } from "../icons/Logo";

export const Navbar = () => {
  return (
    <div className="flex justify-between sm:px-15 px-3 py-5 items-center">
      <div className="flex items-center gap-2 justify-center">
        <Logo />
        <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500 sm:text-[30px] text-[30px]">
          Brainly
        </div>
      </div>
      <div>
        <Link href={}>
          <button className="flex gap-1 text-md items-center justify-center rounded bg-[#560094] text-gray-100 sm:px-5 sm:py-2 p-2 font-semibold inset-shadow-sm inset-shadow-purple-600">
            <GithubIcon />
            star us on github
          </button>
        </Link>
      </div>
    </div>
  );
};
