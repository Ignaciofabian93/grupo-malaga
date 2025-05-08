import Navbar from "./navbar";
import clsx from "clsx";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={clsx("w-full max-w-screen h-full min-h-screen")}>
      <Navbar />
      <div className={clsx("w-full h-fit")}>{children}</div>
    </main>
  );
}
