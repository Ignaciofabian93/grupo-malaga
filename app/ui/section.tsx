import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type Section = {
  id: string;
  img: StaticImageData;
  title: string;
  paragraphs: React.ReactNode;
  orientation?: "left" | "right";
};

export default function Section({
  id,
  img,
  title,
  paragraphs,
  orientation = "left",
}: Section) {
  return (
    <section
      id={id}
      className={clsx("w-full flex flex-col-reverse", {
        "lg:flex-row": orientation === "left",
        "lg:flex-row-reverse": orientation === "right",
      })}
    >
      <div
        className={clsx(
          "flex items-center justify-center w-full h-fit lg:w-1/2 sm:h-[500px]"
        )}
      >
        <Image src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center w-full lg:w-1/2 p-4"
        )}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <div
          className={clsx("p-4", "flex flex-col items-center justify-center")}
        >
          {paragraphs}
        </div>
      </div>
    </section>
  );
}
