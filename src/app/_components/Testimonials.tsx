"use client";
import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { TESTIMONIAL_CARDS } from "../utils/helper";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  function incrementIndex() {
    if (index === TESTIMONIAL_CARDS.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  }

  function decrementIndex() {
    if (!index) {
      setIndex(TESTIMONIAL_CARDS.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  }
  //   setInterval(() => {
  //     incrementIndex();
  //   }, 3000);
  return (
    <div className="flex items-center justify-center gap-12">
      <button
        className="h-auto w-12 rounded-3xl bg-slate-400 p-3 text-2xl font-semibold hover:bg-slate-600 "
        onClick={decrementIndex}
      >
        &lt
      </button>
      <TestimonialCard {...TESTIMONIAL_CARDS[index]} />
      <button
        className="h-auto w-12 rounded-3xl bg-slate-400 p-3 text-2xl font-semibold hover:bg-slate-600"
        onClick={incrementIndex}
      >
        &gt
      </button>
    </div>
  );
};
