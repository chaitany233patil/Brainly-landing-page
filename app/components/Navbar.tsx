import Link from "next/link";
import { GithubIcon } from "../icons/Github";
import { Logo } from "../icons/Logo";

export const Navbar = () => {
  return (
    <div className="flex">
      <div className="w-full mx-auto flex justify-between items-center px-18 py-4">
        <div className="flex items-center gap-2 justify-center">
          <Logo className="lucide lucide-brain-icon lucide-brain text-purple-950 h-7 font-bold" />
          <div className="font-bold tracking-tight text-3xl bg-clip-text text-transparent bg-gradient-to-r  from-white via-white to-neutral-400/50">
            Brainly
          </div>
        </div>
        <div>
          <Link
            href={"https://github.com/chaitany233patil/Brainly-landing-page"}
            target="_blank"
          >
            <button className="flex gap-1 py-1 px-2 items-center justify-center rounded bg-[#560094] text-gray-100  inset-shadow-sm inset-shadow-purple-600 cursor-pointer">
              <GithubIcon
                className={"lucide lucide-github-icon lucide-github h-4"}
              />
              star us on github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
