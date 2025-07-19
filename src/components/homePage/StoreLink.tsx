import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from 'next/image';

export default function StoreLink({ href, src, alt }: { href: string; src: StaticImageData; alt: string }) {
    return (
        <Link href={href} prefetch={false} className="block">
            <Image src={src} alt={alt} width={135} height={40} className="h-10 w-auto" />
        </Link>
    );
}