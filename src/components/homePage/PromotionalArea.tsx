"use client";

import Section from "../shared/Section";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";
import Countdown from "./Countdown";




export default function PromotionalArea() {

  const targetDate = new Date(
    Date.now() + ((3 * 24 + 18) * 60 * 60 + 55 * 60) * 1000
  );

  return (
    <Section className="py-16 lg:py-32">
      <div className="bg-color-gray-80/20">
        <Container>
          <div className="relative z-10 flex-1 min-h-96 space-y-8 py-[5.625rem]">
            <Badge>Special Offer</Badge>

            <Heading
              as="h2"
              size="h1"
              weight="medium"
              className="tracking-tight text-color-black"
            >
              Seasonal Fruit Bundle
            </Heading>

            <Heading
              as="h3"
              size="h2"
              weight="medium"
              className="text-color-black"
            >
              Discount up to <span className="text-color-primary">80% OFF</span>
            </Heading>

            <Countdown targetDate={targetDate} />

            <span className="inline-block rounded-full bg-[#186D38] px-8 py-4 font-rubik text-3xl font-bold text-color-gray-20">
              CODE: <span className="text-[#FAC712]">FRESH80</span>
            </span>
          </div>
        </Container>
      </div>
    </Section>
  );
}

