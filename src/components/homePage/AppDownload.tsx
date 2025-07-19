import Image from "next/image";
import appStore from "@/assets/images/appStore.png";
import playStore from "@/assets/images/playStore.png";
import leafImg from "@/assets/images/leaf.png";
import StoreLink from "./StoreLink";


export default function AppDownload() {
    return (
        <div className="mt-6 relative z-10">
            <Image
                src={leafImg}
                alt="Leaf decoration"
                className="absolute left-0 top-1/4 w-16 -translate-x-1/2 -rotate-45 -z-10"
            />
            <span className="text-sm">Download App:</span>
            <div className="flex gap-4 mt-3">
                <StoreLink href="#" src={playStore} alt="Google Play Store" />
                <StoreLink href="#" src={appStore} alt="Apple App Store" />
            </div>
        </div>
    );
}