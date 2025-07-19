import Image from "next/image";


import girlImg from "@/assets/images/girl.png";
import offerImg from "@/assets/images/offerImage.png";
import AppDownload from "./AppDownload";
import Section from "../shared/Section";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <Section
      id="home"
      className="min-h-screen py-36 lg:py-44 -mt-[6.25rem] [background:linear-gradient(to_right,_#f4f6f6_69%,_#749b3f_31%)] z-10"
    >
      <Image
        src={girlImg}
        alt="Girl"
        className="absolute bottom-0 left-[54.5%] max-w-[40rem] h-auto object-contain -z-10"
      />

      <Container>
        <div className="max-w-2xl space-y-6">
          <Badge>Welcome to Fresh Harvest</Badge>

          <Heading as="h1" size="h1" weight="medium" className="tracking-tight">
            Fresh Fruits and Vegetables
          </Heading>

          <p>
            At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables
          </p>

          <Button>Shop Now</Button>

          <Image
            src={offerImg}
            alt="offer"
            className="max-w-lg w-full block h-auto -translate-x-1/4 md:translate-x-1/4"
          />

          <AppDownload />
        </div>
      </Container>
    </Section>
  );
}



