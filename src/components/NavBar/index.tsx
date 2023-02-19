import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar";
import NavLinks from "./NavLinks";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-inherit h-fit flex items-center justify-between px-4 md:px-12">
      <div className="flex w-full md:w-auto">
        <Link href="/" className="mr-5">
          <Image src="/logo.webp" alt="Cult Creative" width={48} height={48} />
        </Link>
        <SearchBar />
      </div>
      <NavLinks />
    </nav>
  );
};

export default NavBar;
