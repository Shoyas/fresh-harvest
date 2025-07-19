"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X, LucideHeart, LucideShoppingCart } from "lucide-react";

import logo from "@/assets/images/logo.png";
import useAuthGuard from "@/hooks/useAuthGuard";
import { showAuthForm } from "@/redux/slices/appSlice";
import type { RootState } from "@/redux";

import ActiveLink from "./shared/ActiveLink";
import Button from "./shared/Button";
import Container from "./shared/Container";
import { cn } from "@/lib/utils";

// ------------------ Constants ------------------
const navData = [
  { name: "Home", hash: "#home" },
  { name: "Shop", hash: "#shop" },
  { name: "About us", hash: "#about-us" },
  { name: "Blog", hash: "#blog" },
];

// ------------------ Components ------------------
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const { user } = useAuthGuard();



  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300 backdrop-blur bg-white/10"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-[6.25rem] relative">
          <Logo onClick={() => setActiveHash("#home")} />

          <DesktopMenu activeHash={activeHash} setActiveHash={setActiveHash} />

          <div className="flex items-center gap-4 text-sm">
            <Favorites />
            <CartButton />
            <div className="hidden lg:inline-flex">
              {user ? <SignOutButton /> : <SignInButton />}
            </div>
            <MobileToggle open={open} setOpen={setOpen} />
          </div>

          {open && (
            <MobileMenu
              activeHash={activeHash}
              setActiveHash={setActiveHash}
              isAuthenticated={!!user}
            />
          )}
        </nav>
      </Container>
    </header>
  );
}

// ------------------ Sub Components ------------------

const Logo = ({ onClick }: { onClick: () => void }) => (
  <Link href="/" onClick={onClick} className="flex items-center gap-2">
    <Image className="size-10" src={logo} alt="Logo" />
    <span className="font-medium text-lg font-rubik">Fresh Harvests</span>
  </Link>
);

const DesktopMenu = ({
  activeHash,
  setActiveHash,
}: {
  activeHash: string;
  setActiveHash: (hash: string) => void;
}) => (
  <ul className="hidden lg:flex gap-16">
    {navData.map(({ name, hash }) => (
      <li key={name}>
        <ActiveLink
          hash={hash}
          active={activeHash === hash}
          onClick={() => setActiveHash(hash)}
        >
          {name}
        </ActiveLink>
      </li>
    ))}
  </ul>
);

const MobileMenu = ({
  activeHash,
  setActiveHash,
  isAuthenticated,
}: {
  activeHash: string;
  setActiveHash: (hash: string) => void;
  isAuthenticated: boolean;
}) => (
  <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden py-4 px-6">
    <ul className="flex flex-col gap-4">
      {navData.map(({ name, hash }) => (
        <li key={name}>
          <ActiveLink
            hash={hash}
            active={activeHash === hash}
            onClick={() => setActiveHash(hash)}
          >
            {name}
          </ActiveLink>
        </li>
      ))}
      <li>
        <Favorites />
      </li>
      <li>
        {isAuthenticated ? null : <SignInButton className="w-full" />}
      </li>
    </ul>
  </div>
);

const Favorites = () => (
  <span className="hidden lg:flex gap-2 items-center cursor-pointer">
    <LucideHeart size={16} />
    Favorites
  </span>
);

const CartButton = () => {
  const cartItems = useSelector((state: RootState) => state.app.cart);
  const itemCount = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <span className="flex gap-2 items-center text-sm cursor-pointer">
      <span className="relative">
        <LucideShoppingCart size={16} />
        <span className="bg-red-500 text-white rounded-full p-1 absolute size-4 text-xs -top-3 -right-2 inline-flex items-center justify-center">
          {itemCount}
        </span>
      </span>
      <span className="hidden sm:inline-block">Cart</span>
    </span>
  );
};

const SignInButton = ({ ...props }) => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="secondary"
      tone="outline"
      onClick={() => dispatch(showAuthForm())}
      size="sm"
      {...props}
    >
      Sign in
    </Button>
  );
};

const SignOutButton = () => {
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    location.reload();
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="secondary"
      tone="outline"
      size="sm"
    >
      Sign out
    </Button>
  );
};

const MobileToggle = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => (
  <button
    className="lg:hidden ml-2"
    onClick={() => setOpen(!open)}
    aria-label="Toggle menu"
  >
    {open ? <X size={24} /> : <Menu size={24} />}
  </button>
);
