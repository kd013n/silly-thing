import { BackwardIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Videos() {
  return (
    <div className="px-10 md:px-48 py-24 text-cyan-200 font-semibold text-4xl flex flex-col justify-center items-start">
      <Link href="/" className="hover:text-cyan-400">
        <BackwardIcon className="size-7 inline-block" /> go back
      </Link>
      <p className="self-center mt-10">there isnt anything here yet :(</p>
    </div>
  );
}
