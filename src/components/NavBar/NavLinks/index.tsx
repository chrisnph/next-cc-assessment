import Link from "next/link";

const NavLinks: React.FC = () => {
  return (
    <div className="hidden sm:block">
      <ul className="flex space-x-8">
        <li className="px-3 py-1 rounded-3xl">
          <Link href="/jobs">Jobs</Link>
        </li>
        <li className="px-3 py-1 rounded-3xl border border-black">
          <Link href="/sign-up">Sign Up</Link>
        </li>
        <li className="px-3 py-1 rounded-3xl">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
