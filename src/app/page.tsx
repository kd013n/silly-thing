import Link from "next/link";
import { ForwardIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="px-10 md:px-48 py-24 flex flex-col justify-center items-start">
      <div className="p-5 mb-10 bg-zinc-900 rounded-xl">
        <p className="text-2xl text-center">
          what&apos;s this? <br /> <br />
          hello, my cutie! for the 14th silly thing, i decided to start this
          project of compiling silly things and stuff... i just want you to
          remember right now how much your kodeine looooooves you! i&apos;m sort
          of procrastinating right now, but &apos;m just super glad this idea
          came to me, and i really wanna make a special place for all the
          special things we&apos;ve shared... and will share for years to come.
          i love you so much :3
        </p>
      </div>
      <p className=" text-cyan-200 font-semibold text-4xl">silly directory</p>
      <div className="mt-5 flex flex-col justify-center items-start text-cyan-200 text-3xl">
        <ul>
          <li className="hover:text-cyan-400">
            <ForwardIcon className="size-7 inline-block mx-7" />
            <Link href="/images">images</Link>
          </li>
          <li className="hover:text-cyan-400">
            <ForwardIcon className="size-7 inline-block mx-7" />
            <Link href="/videos">videos</Link>
          </li>
          <li className="hover:text-cyan-400">
            <ForwardIcon className="size-7 inline-block mx-7" />
            <Link href="/audios">audios</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
