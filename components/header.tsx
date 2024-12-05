import Link from "next/link";
import CartyLogo from "./ui/CartyLogo.svg";

export default async function Header() {
  return (
    <header className=" p-4">
      <div className="flex justify-center">
        <Link href="/" aria-label="Carty Home">
          <CartyLogo />
        </Link>
      </div>
    </header>
  );
}
