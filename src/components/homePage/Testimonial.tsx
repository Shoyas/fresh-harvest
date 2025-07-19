import testimonial from "@/assets/images/testimonial.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Section from "../shared/Section";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";

const customerTestimonials = [
  {
    id: 1,
    authorImage: testimonial,
    message:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    customerName: "Jane Doe",
    customerTitle: "Professional Chef",
  },
];

export default function Testimonial() {
  return (
    <Section className="py-16 lg:py-[7.5rem]">
      <div className="max-w-[37rem] mx-auto px-4 text-center space-y-4 tracking-tight">
        <Badge>Testimonial</Badge>
        <Heading
          as="h2"
          size="h2"
          weight="medium"
          className="tracking-tight"
        >
          What Our Customers Say
        </Heading>
        <p className="text-sm">
          Don&apos;t just take our word for it—here&apos;s what some of our
          customers have to say about their experience with Fresh Harvest:
        </p>
      </div>

      <Container size="sm" className="mt-6 lg:mt-10 space-y-6">
        {customerTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 space-y-3"
          >
            <Image
              src={testimonial.authorImage}
              alt={testimonial.customerTitle}
              className="max-w-84"
            />
            <figure className="flex-1 bg-color-gray-20 p-8 rounded-lg">
              <blockquote className="text-color-gray-100 text-body-2 text-[1.25rem] leading-relaxed">
                {testimonial.message}
              </blockquote>
              <figcaption className="mt-4 lg:mt-8 text-color-gray-100 text-body-2">
                <span className="font-rubik font-semibold">
                  {testimonial.customerName}
                </span>{" "}
                - {testimonial.customerTitle}
              </figcaption>
            </figure>
          </div>
        ))}

        <div className="flex justify-center gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "block size-4 rounded-full bg-color-gray-80 cursor-pointer",
                index === 0 && "bg-color-green"
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
