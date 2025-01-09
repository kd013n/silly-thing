import { BackwardIcon, ForwardIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

import img001a from "../../../public/001a.jpg";
import img001b from "../../../public/001b.jpg";
import img002 from "../../../public/002.jpg";
import img003 from "../../../public/003.jpg";
import img004a from "../../../public/004a.jpg";
import img004b from "../../../public/004b.jpg";
import img005 from "../../../public/005.jpg";
import img006 from "../../../public/006.jpg";
import img007 from "../../../public/007.jpg";
import img008a from "../../../public/008a.jpg";
import img008b from "../../../public/008b.jpg";
import img009 from "../../../public/009.jpg";
import img010a from "../../../public/010a.jpg";
import img010b from "../../../public/010b.jpg";
import img011a from "../../../public/011a.jpg";
import img011b from "../../../public/011b.jpg";
import img011c from "../../../public/011c.jpg";
import img012a from "../../../public/012a.jpg";
import img012b from "../../../public/012b.jpg";
import img013 from "../../../public/013.jpg";

export default function Images() {
  return (
    <div className="px-10 md:px-48 py-24 text-cyan-200 font-semibold text-4xl flex flex-col justify-center items-start">
      <Link href="/" className="hover:text-cyan-400">
        <BackwardIcon className="size-7 inline-block" /> go back
      </Link>
      <div className="flex flex-col justify-center items-start text-center">
        <p className="self-center text-center mt-10">
          <span className="text-red-200">DISCLAIMER:</span> ONLY INCLUDES STUFF
          FROM KODEINE FOR NOW
        </p>

        <div className="my-10 w-full">
          <span className="text-3xl md:text-4xl">
            013: i was running out of ideas
          </span>{" "}
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 8th january 2025</span> /{" "}
            <span className="text-yellow-200">[kodeine] 8th january 2025</span>
          </div>
          <div className="mt-5 mx-5 grid grid-cols-1 grid-rows-1">
            <Image
              src={img013}
              alt="013"
              height={0}
              width={500}
              className="rounded-xl justify-self-center aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            kodeine: i hope this was cool
          </div>
        </div>

        <div className="my-10">
          012: silly + nonsilly = silly <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 17th december 2024</span>{" "}
            /{" "}
            <span className="text-yellow-200">
              [kodeine] 17th december 2024
            </span>
          </div>
          <div className="mt-5 mx-5 gap-3 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <Image
              src={img012a}
              alt="012a"
              height={0}
              width={0}
              className="rounded-xl aspect-square object-cover"
              loading="lazy"
            />
            <Image
              src={img012b}
              alt="012b"
              height={0}
              width={0}
              className="rounded-xl aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br /> kodeine: ...and you sent me a moon pic!! cute
          </div>
        </div>

        <div className="my-10">
          011: sent you a letter back!
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 14th november 2024</span>{" "}
            /{" "}
            <span className="text-yellow-200">
              [kodeine] 14th november 2024
            </span>
          </div>
          <div className="mt-5 mx-5 gap-3 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
            <Image
              src={img011a}
              alt="011a"
              height={0}
              width={0}
              className="rounded-xl aspect-square"
              loading="lazy"
            />
            <Image
              src={img011b}
              alt="011b"
              height={0}
              width={0}
              className="rounded-xl aspect-square"
              loading="lazy"
            />
            <Image
              src={img011c}
              alt="011c"
              height={0}
              width={0}
              className="rounded-xl aspect-square"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            kodeine: finally said some things i&apos;ve been wanting to say for
            a long time since
          </div>
        </div>

        <div className="my-10">
          010: fishe kisses <br />
          <div className="ml-5 text-xl">
            <span className="text-blue-400">[fishe] 29th october 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 29th october 2024</span>
          </div>
          <div className="mt-5 mx-5 gap-3 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <Image
              src={img010a}
              alt="010a"
              height={0}
              width={0}
              className="rounded-xl aspect-square object-cover"
              loading="lazy"
            />
            <Image
              src={img010b}
              alt="010b"
              height={0}
              width={0}
              className="rounded-xl aspect-square"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br /> kodeine: i still can&apos;t believe you find these things
            cute
          </div>
        </div>

        <div className="my-10 w-full">
          <span className="text-3xl md:text-4xl">009: choccy overload</span>{" "}
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 20th october 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 21st october 2024</span>
          </div>
          <div className="mt-5 mx-5 grid grid-cols-1 grid-rows-1">
            <Image
              src={img009}
              alt="009"
              height={0}
              width={500}
              className="rounded-xl justify-self-center aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            kodeine: i was late because i spent all night just sleeping and i
            was highkey stressed about not having anything cool to offer. it was
            an incredible night though, we watched princess mononoke and flept
            together :3
          </div>
        </div>

        <div className="my-10">
          008: flying to czechia <br />
          <div className="ml-5 text-xl">
            <span className="text-blue-400">[fishe] 29th august 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 29th august 2024</span>
          </div>
          <div className="mt-5 mx-5 gap-3 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <Image
              src={img008a}
              alt="008a"
              height={0}
              width={0}
              className="rounded-xl"
              loading="lazy"
            />
            <Image
              src={img008b}
              alt="008b"
              height={0}
              width={0}
              className="rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            have you ever seen a flying fishe??!
          </div>
        </div>

        <div className="my-10 w-full">
          <span className="text-3xl md:text-4xl">
            007: random acts of silliness
          </span>{" "}
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 5th january 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 5th january 2024</span>
          </div>
          <div className="mt-5 mx-5 grid grid-cols-1 grid-rows-1">
            <Image
              src={img007}
              alt="007"
              height={0}
              width={500}
              className="rounded-xl justify-self-center aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            kodeine: i was just hanging out at my friend&apos;s place and
            decided to draw something. sooo... here&apos;s a cute fishe :3
          </div>
        </div>

        <div className="my-10 w-full">
          <span className="text-3xl md:text-4xl">
            006: wrote this on a book pt. 2
          </span>{" "}
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 29th may 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 29th may 2024</span>
          </div>
          <div className="mt-5 mx-5 grid grid-cols-1 grid-rows-1">
            <Image
              src={img006}
              alt="006"
              height={0}
              width={500}
              className="rounded-xl justify-self-center aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            kodeine: i cant even remember what exactly but i said stupid things
            and hoped a cheese offering may help... im really sorry, my cutie
            :&apos;(
          </div>
        </div>

        <div className="my-10 w-full">
          <span className="text-3xl md:text-4xl">
            005: wrote this on a book
          </span>{" "}
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 28th may 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 28th may 2024</span>
          </div>
          <div className="mt-5 mx-5 grid grid-cols-1 grid-rows-1">
            <Image
              src={img005}
              alt="005"
              height={0}
              width={500}
              className="rounded-xl justify-self-center aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            kodeine: i have no idea what this means. i was gonna do a flipbook
            thing (thats why i drew it in a book), but i had no time to make one
            :(
          </div>
        </div>

        <div className="my-10">
          004: laefs attempt <br />
          <div className="ml-5 text-xl">
            <span className="text-blue-400">[fishe] 9th may 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 10th may 2024</span>
          </div>
          <div className="mt-5 mx-5 gap-3 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <Image
              src={img004a}
              alt="004a"
              height={0}
              width={0}
              className="rounded-xl"
              loading="lazy"
            />
            <Image
              src={img004b}
              alt="004b"
              height={0}
              width={0}
              className="rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            dates back to 20th of october 2022, pics taken around 4pm at
            kodeine&apos;s time. this is actually the very first silly thing,
            but it wasnt sent until 1.58 years later :3
          </div>
        </div>

        <div className="my-10 w-full">
          <span className="text-3xl md:text-4xl">003: silly festive hat</span>{" "}
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 14th february 2024</span>{" "}
            /{" "}
            <span className="text-yellow-200">
              [kodeine] 14th february 2024
            </span>
          </div>
          <div className="mt-5 mx-5 grid grid-cols-1 grid-rows-1">
            <Image
              src={img003}
              alt="003"
              height={0}
              width={500}
              className="rounded-xl justify-self-center aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            happy valentines :3
          </div>
        </div>

        <div className="my-10 w-full">
          <span className="text-3xl md:text-4xl">002: silly clover hat</span>{" "}
          <br />
          <div className="ml-5 text-xl">
            <span className="text-yellow-200">[fishe] 5th january 2024</span> /{" "}
            <span className="text-yellow-200">[kodeine] 5th january 2024</span>
          </div>
          <div className="mt-5 mx-5 grid grid-cols-1 grid-rows-1">
            <Image
              src={img002}
              alt="002"
              height={0}
              width={500}
              className="rounded-xl justify-self-center aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />i may have been enjoying origami way too much
          </div>
        </div>

        <div className="my-10">
          001: swag crane <br />
          <div className="ml-5 text-xl">
            <span className="text-blue-400">[fishe] 5th july 2023</span> /{" "}
            <span className="text-yellow-200">[kodeine] 6th july 2023</span>
          </div>
          <div className="mt-5 mx-5 gap-3 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <Image
              src={img001a}
              alt="001a"
              height={0}
              width={0}
              className="rounded-xl"
              loading="lazy"
            />
            <Image
              src={img001b}
              alt="001b"
              height={0}
              width={0}
              className="rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="mt-3 mx-5 bg-zinc-900 py-3 px-5 rounded-xl text-xl">
            <span className="text-cyan-400">
              [kodeine
              <ForwardIcon className="size-4 inline-block mx-1" />
              fishe]
            </span>{" "}
            <br />
            first (official) silly thing from kodeine :3 + we revealed our
            names!!
          </div>
        </div>
      </div>
    </div>
  );
}
