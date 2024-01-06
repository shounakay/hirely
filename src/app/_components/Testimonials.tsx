"use client";

import { useState } from "react";
import { Props as TestimonialProps, TestimonialCard } from "./TestimonialCard";
import { TESTIMONIAL_CARDS } from "../utils/helper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const incrementIndex = () => {
    setIndex((index) => (index + 1) % TESTIMONIAL_CARDS.length);
  };

  const decrementIndex = () => {
    setIndex(
      (index) =>
        (index - 1 + TESTIMONIAL_CARDS.length) % TESTIMONIAL_CARDS.length,
    );
  };
  // setInterval(() => {
  //   incrementIndex();
  // }, 3000);
  return (
    <div className="flex items-center justify-center gap-12">
      <button
        className="h-auto w-12 rounded-3xl bg-slate-400 p-3 text-2xl font-semibold hover:bg-slate-600 "
        onClick={decrementIndex}
      >
        <FaChevronLeft />
      </button>
      <TestimonialCard {...(TESTIMONIAL_CARDS[index] as TestimonialProps)} />
      <button
        className="h-auto w-12 rounded-3xl bg-slate-400 p-3 text-2xl font-semibold hover:bg-slate-600"
        onClick={incrementIndex}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
