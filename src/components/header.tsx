import Link from "next/link";
import { Logo } from "./icons/logo";
import { Container } from "./container";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)] items-center">
        <Link href="/" className="flex items-center text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4 " /> Linear
        </Link>

        <nav className="h-full">
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6 [&_a:hover]:text-grey [&_a]:transition-colors">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center ml-auto h-full">
          <Button href="#" variant="secondary" className="text-sm mr-6">
            Log in
          </Button>
          <Button href="#" variant="primary" className="text-sm ">
            Sign up
          </Button>
        </div>
      </Container>
    </header>
  );
};
