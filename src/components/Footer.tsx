import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import type { StaticImageData } from 'next/image';

import logo from "@/assets/images/logo.png";
import playStoreLogo from "@/assets/images/playStore.png";
import appStoreLogo from "@/assets/images/appStore.png";
import gPay from "@/assets/images/gpay.png";
import visa from "@/assets/images/visa.png";
import paypal from "@/assets/images/paypal.png";
import x from "@/assets/images/x.png";
import facebook from "@/assets/images/facebook.png";
import instagram from "@/assets/images/instagram.png";

import Container from "./shared/Container";
import Heading from "./shared/Heading";

const quickLinks = [
  {
    title: "Quick links 1",
    items: ["Home", "Shop", "About us", "Blog", "Detail Blog"],
  },
  {
    title: "Quick links 2",
    items: ["Favorites", "Cart", "Sign in", "Register"],
  },
];

const contactDetails = [
  { Icon: Phone, value: "1234 5678 90" },
  { Icon: Mail, value: "freshharvests@gmail.com" },
  { Icon: MapPin, value: "Tanjung Sari Street, Pontianak, Indonesia", multiline: true },
];

export default function Footer() {
  return (
    <footer className="bg-color-gray-20 pt-8 lg:pt-16">
      <Container>
        <div className="space-y-6">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2 flex-wrap sm:flex-nowrap lg:hidden">
            <Image src={logo} alt="Fresh Harvests Logo" className="size-8" />
            <span className="text-2xl font-bold font-rubik text-color-black">Fresh Harvests</span>
          </div>

          {/* Top Section */}
          <div className="flex justify-between gap-4">
            <LeftSide />

            {/* Quick Links Sections */}
            {quickLinks.map(({ title, items }) => (
              <nav key={title} className="flex flex-col space-y-4">
                <Heading as="h3" size="h6" weight="medium" className="max-lg:text-sm">
                  {title}
                </Heading>
                <ul className="space-y-3">
                  {items.map((text) => (
                    <li key={text}>
                      <Link
                        href="#"
                        prefetch={false}
                        className="text-sm hover:underline text-color-gray-100"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact Section */}
            <div className="flex flex-col space-y-4 max-w-sm">
              <Heading as="h3" size="h6" weight="medium" className="max-lg:text-sm">
                Contact us
              </Heading>
              <div className="space-y-3 text-sm text-color-gray-100">
                {contactDetails.map(({ Icon, value, multiline }) => (
                  <div
                    key={value}
                    className={`flex items-${multiline ? "start" : "center"} space-x-2`}
                  >
                    <Icon
                      className={`flex-shrink-0 text-fresh-green h-5 w-5 ${multiline ? "mt-0.5" : ""}`}
                    />
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              {/* Payment Methods (desktop) */}
              <div className="hidden lg:block mt-6">
                <Heading as="h3" size="h6" weight="medium" className="text-sm!">
                  Accepted Payment Methods:
                </Heading>
                <div className="flex gap-4 mt-4 items-center">
                  {[visa, paypal, gPay].map((img, i) => (
                    <Image key={i} src={img} alt="Payment method" className="h-12 w-16" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        <MobileBottom />


        <FooterBottom />
      </Container>
    </footer>
  );
}

function LeftSide() {
  return (
    <aside className="hidden lg:flex flex-col justify-between space-y-4">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Fresh Harvests Logo" className="size-10 lg:size-[3.25rem]" />
        <span className="font-rubik font-bold text-2xl lg:text-3xl text-color-black">
          Fresh Harvests
        </span>
      </div>

      <div>
        <Heading as="h3" size="h6" weight="medium" className="text-sm! mt-6">
          Download App:
        </Heading>
        <div className="flex space-x-4 mt-3">
          <AppLink href="#" src={playStoreLogo} alt="Google Play" />
          <AppLink href="#" src={appStoreLogo} alt="App Store" />
        </div>
      </div>
    </aside>
  );
}

function MobileBottom() {
  return (
    <section className="lg:hidden mt-6">
      <Heading as="h3" size="h6" weight="medium" className="text-sm!">
        Accepted Payment Methods:
      </Heading>
      <div className="flex gap-4 mt-4 items-center">
        {[visa, paypal, gPay].map((img, i) => (
          <Image key={i} src={img} alt="Payment method" className="h-12 w-16" />
        ))}
      </div>

      <div className="flex space-x-4 mt-3">
        <AppLink href="#" src={playStoreLogo} alt="Google Play" />
        <AppLink href="#" src={appStoreLogo} alt="App Store" />
      </div>
    </section>
  );
}

function FooterBottom() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 items-center justify-between mt-8 border-t border-color-gray-50 py-6">
      <span className="order-2 lg:order-1 font-rubik font-medium text-sm">
        © {new Date().getFullYear()}, All Rights Reserved by Banana Studio
      </span>
      <nav className="order-1 lg:order-2 flex gap-2">
        {[x, facebook, instagram].map((icon, idx) => (
          <Link key={idx} href="#">
            <Image src={icon} alt="social icon" className="size-8" />
          </Link>
        ))}
      </nav>
    </div>
  );
}

function AppLink({
  href,
  src,
  alt,
}: {
  href: string;
  src: StaticImageData;
  alt: string;
}) {
  return (
    <Link href={href} prefetch={false} className="block">
      <Image src={src} alt={alt} width={135} height={40} className="h-10 w-auto" />
    </Link>
  );
}
