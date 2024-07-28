import Image from "next/image";
import { monaSans } from "@/fonts/monaSans";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import rightSvg from "../../public/right.svg";
import heroImg from "../../public/hero.svg";
import Link from "next/link";
export default function Home() {
  return (
    <main className={`${monaSans.className} overflow-hidden relative h-screen`}>
      <section className="bg-[#A1E870] text-hero sm:pb-24 pb-2 md:pb-20 lg:pb-[196px] lg:grid overflow-hidden">
        <MaxWidthWrapper className="sm:pt-36 md:pt-44 pt-14">
          <div className="flex ">
            <div className="flex-col text-center sm:text-left">
              <h1
                style={{ fontWeight: 800 }}
                className="text-5xl   sm:mb-4 mb-2 lg:text-7xl relative mt-3"
              >
                DESIGN <br />
                YOUR T-SHIRTS
              </h1>
              <p
                className=" font-semibold text-left  pl-14 sm:pl-1 "
                style={{ fontWeight: 700 }}
              >
                Unleash your creativity with personalized t-shirts. Add your
                favorite photo and make it uniquely yours.
              </p>
              <div className="pl-2 mt-4">
                <Link
                  href="/configure/upload"
                  className="sm:-ml-2 md:-ml-4 mt-4 "
                >
                  <Button
                    variant={"link"}
                    className="font-bold text-hero gap-1 text-base underline"
                  >
                    Start Designing
                    <Image src={rightSvg} alt="right-arrow" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:-mt-32 h-8 md:-ml-3 sm:-mt-48">
              <div className="-mr-2">
                <Image
                  aria-label="a woman in t shirt"
                  src={heroImg}
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <div>hello</div>
      </section>
    </main>
  );
}
