import Image from "next/image";
import Link from "next/link";

import aboutUs from "@/assets/images/aboutUs.png"
import Section from "../shared/Section";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";
import Button from "../shared/Button";


export default function AboutUs() {
  return (
    <Section id="about-us" className="mt-6 lg:-mt-14">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-2 max-w-2xl">
            <Image src={aboutUs} alt="About Us" />
          </div>


          <div className="flex-1 space-y-4">
            <Badge>About Us</Badge>

            <Heading as="h2" size="h2" className="tracking-tight">
              About Fresh Harvest
            </Heading>

            <p className="text-sm">
              Welcome to Fresh Harvest, your premier destination for
              high-quality and fresh produce. We are passionate about providing
              you with the finest fruits, vegetables, and salad ingredients to
              nourish your body and delight your taste buds. With a commitment
              to excellence, sustainability, and customer satisfaction, Fresh
              Harvest is here to revolutionize your grocery shopping experience.
            </p>

            <Button asChild tone="outline">
              <Link href="#">Read more</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
