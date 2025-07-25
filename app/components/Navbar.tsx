import Link from "next/link";
import { GithubIcon } from "../icons/Github";
import { Logo } from "../icons/Logo";

export const Navbar = () => {
  return (
    <div className="flex">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center mt-6 px-4 lg:px-0">
        <div className="flex items-center gap-2 justify-center">
          <Logo className="lucide lucide-brain-icon lucide-brain text-purple-700 h-8 font-bold" />
          <div className="font-[550] text-[24px] tracking-wider bg-clip-text text-transparent bg-gradient-to-r  from-white to-neutral-600">
            Brainly
          </div>
        </div>
        <div>
          <Link
            href={"https://github.com/chaitany233patil/Brainly-landing-page"}
            target="_blank"
          >
            <button className="flex gap-1 items-center justify-center rounded bg-purple-800 text-gray-100 cursor-pointer text-sm py-1 px-3">
              <GithubIcon
                className={"lucide lucide-github-icon lucide-github h-4"}
              />
              Star us on Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
