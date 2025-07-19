import blog1 from "@/assets/images/blog-01.png";
import blog2 from "@/assets/images/blog-02.png";
import blog3 from "@/assets/images/blog-03.png";
import leafIcon from "@/assets/images/leaf.png";

import Image from "next/image";
import Link from "next/link";
import Section from "../shared/Section";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";

const blogs = [
  {
    id: 1,
    img: blog1,
    title: `Exploring Seasonal Delights: A Guide to What's Fresh Right Now`,
    createdAt: "May 23, 2024",
    href: "#",
  },
  {
    id: 2,
    img: blog2,
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    createdAt: "May 23, 2024",
    href: "#",
  },
  {
    id: 3,
    img: blog3,
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    createdAt: "May 23, 2024",
    href: "#",
  },
];

export default function OurBlog() {
  const renderBlogCard = (blog: typeof blogs[number]) => (
    <article key={blog.id} className="space-y-3">
      <Image src={blog.img} alt="Blog Image" />
      <time className="text-body-2 text-color-gray-100 block mt-2">{blog.createdAt}</time>
      <Heading
        as="h3"
        size="h6"
        weight="bold"
        className="leading-snug"
      >
        {blog.title}
      </Heading>
      <Link
        href={blog.href}
        className="mt-4 inline-flex items-center gap-2 text-color-primary font-rubik font-medium text-sm hover:underline"
      >
        Read More <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );

  return (
    <Section id="blog" className="py-16 lg:py-[7.5rem]">
      <Container size="xs" className="relative text-center space-y-4">
        <Image
          src={leafIcon}
          alt="Leaf decoration"
          className="absolute top-1/4 left-full translate-x-[200%] w-16 -rotate-45"
          priority
        />
        <Badge>Blog</Badge>
        <Heading as="h2" size="h2" className="tracking-tight">
          Fresh Harvest Blog
        </Heading>
        <p className="text-sm max-w-[36rem] mx-auto">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </Container>

      <Container className="mt-6 lg:mt-10">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
          {blogs.map(renderBlogCard)}
        </div>
      </Container>
    </Section>
  );
}
