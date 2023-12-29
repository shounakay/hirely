import Image from "next/image";
import showcase from "../../../public/hirely-home-1.png";
import { CATEGORY_CARDS } from "../utils/helper";
import { CategoryCard } from "../_components/CategoryCard";
import { TestimonialCard } from "../_components/TestimonialCard";
import { Testimonials } from "../_components/Testimonials";

const HomePage = () => {
  return (
    <article>
      <section className="flex h-[500px] max-h-fit w-full items-center justify-between gap-20 bg-gradient-to-b from-cyan-100 to-cyan-200 px-16 py-28">
        <div className="flex basis-1/2 flex-col gap-6 text-slate-600">
          <h6 className="text-xl">
            Embark on your career journey with confidence as we seamlessly
            connect you with companies that align with your skills and values.
            Discover the perfect match for your career aspirations while
            prioritizing a positive and supportive employee culture.
          </h6>
          <div>
            <button className="rounded-2xl bg-teal-600 px-4 py-2 text-slate-100 transition-all hover:bg-teal-500">
              Explore Jobs <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>
        <aside className="basis-1/2">
          <Image src={showcase} alt="showcase" width={500} height={500} />
        </aside>
      </section>
      <section className="flex w-full flex-col items-center gap-8 bg-waikawa-gray-200 px-16 py-12">
        <h6 className="text-2xl">BROWSE BY CATEGORIES</h6>
        <div className="flex w-full flex-wrap gap-28 pb-10">
          {CATEGORY_CARDS.map((card) => (
            <CategoryCard {...card} />
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col items-center gap-10 p-8">
        <h4 className="text-2xl font-medium">HEAR FROM OUR SUBSCRIBERS</h4>
        <Testimonials />
        {/* <div className="flex flex-wrap gap-8">
          {TESTIMONIAL_CARDS.map((testimonial) => (
            <TestimonialCard {...testimonial} />
          ))}
        </div> */}
      </section>
    </article>
  );
};

export default HomePage;
