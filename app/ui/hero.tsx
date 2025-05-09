import clsx from "clsx";

export default function Hero() {
  return (
    <section
      className={clsx(
        "w-full h-screen",
        "flex flex-col items-center justify-center",
        "bg-cover bg-center bg-no-repeat",
        "overflow-hidden relative"
      )}
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0",
          "w-full h-full",
          "bg-black/50",
          "z-0"
        )}
      />
      <h1
        className={clsx(
          "z-10",
          "text-[3rem] md:text-[4rem] lg:text-[6rem] text-[#fff]"
        )}
      >
        Grupo Málaga
      </h1>
    </section>
  );
}
