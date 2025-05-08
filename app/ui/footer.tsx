import logo from "@/app/assets/images/logo-small.png";
import Image from "next/image";
import clsx from "clsx";
import colegioInmobiliario from "@/app/assets/images/ci.jpeg";
import acop from "@/app/assets/images/acop.jpeg";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "w-full min-h-[260px] flex flex-wrap items-center justify-between bg-[#00252d] text-[#fff]",
        "p-6 gap-6"
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-start justify-center w-full h-[140px] lg:max-w-1/3 text-pretty gap-2"
        )}
      >
        <p
          className={clsx(
            "text-sm text-center flex items-center justify-center w-full"
          )}
        >
          Grupo Málaga - Corretaje de Propiedades en Chile
        </p>
        <p
          className={clsx(
            "text-sm text-center flex items-center justify-center w-full"
          )}
        >
          Regida por la Ley N° 19.496 sobre protección de los derechos de los
          consumidores
        </p>
        <p
          className={clsx(
            "text-sm text-center flex items-center justify-center w-full"
          )}
        >
          Fiscalizada por el SERNAC y el MINVU
        </p>
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center w-full h-[140px] lg:max-w-1/3 text-pretty gap-2"
        )}
      >
        <Image src={logo} alt="logo" width={280} height={150} />
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center w-full h-[140px] lg:max-w-1/4 text-pretty gap-2"
        )}
      >
        <div className={clsx("mt-[1rem] flex gap-4")}>
          <Image
            src={colegioInmobiliario}
            alt="Colegio Inmobiliario"
            width={100}
          />
          <Image src={acop} alt="ACOP" width={100} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className={clsx("text-sm text-center mt-4")}>
          © {new Date().getFullYear()} Grupo Málaga. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
