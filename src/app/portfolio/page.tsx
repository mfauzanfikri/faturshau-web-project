import Bob from "@/components/Home/Bob";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-white px-5 py-8">
      <section className="pt-3 lg:flex lg:justify-center lg:py-8 lg:pt-5">
        <h1 className="text-center text-4xl font-bold">Portfolio</h1>
      </section>

      <section className="mt-2">
        <div className="lg:mx-auto lg:flex lg:max-w-7xl">
          <div className="h-64 w-full overflow-hidden rounded-lg bg-[url('/images/fatur_shau.png')] lg:h-auto lg:w-1/2"></div>
          <div className="mt-2 lg:mt-0 lg:w-1/2 lg:px-3 lg:py-3.5">
            <p className="text-sm uppercase">AAA</p>
            <h2 className="text-xl font-bold">heading</h2>
            <p className="mt-1.5 text-zinc-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              veritatis eius dignissimos animi nam aut in possimus culpa
              inventore modi. Sapiente molestiae rem voluptates voluptatibus
              consequatur sunt nesciunt dolorem deleniti aut voluptatem
              expedita, cum cumque quisquam tempora blanditiis soluta impedit
              ex. Laboriosam corrupti eius quae explicabo maxime impedit nobis
              minima modi, consequatur expedita adipisci voluptate eum odio,
              ratione ducimus, sapiente at commodi cupiditate dicta sunt
              delectus laborum nulla! Numquam inventore dignissimos velit
              laboriosam, tenetur consequuntur laudantium. Sequi sapiente
              quibusdam atque eos vitae maxime excepturi repudiandae quas.
              Quaerat animi accusantium, commodi vero impedit a assumenda
              suscipit consequatur eaque iste adipisci fugiat.
            </p>
            <div className="mt-2.5 lg:mt-1.5">
              <a
                href="#"
                className="flex items-center justify-center gap-1 text-sm font-semibold text-zinc-500 hover:cursor-pointer lg:justify-end"
              >
                Continue Reading <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
