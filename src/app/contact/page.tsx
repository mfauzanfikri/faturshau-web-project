const page = () => {
  return (
    <>
      <section className="py-8 lg:mt-5 lg:flex lg:justify-center">
        <div className="gap-10 lg:flex lg:w-4/5">
          {/* profile photo */}
          <section className="hidden basis-1/4 flex-col items-center lg:flex">
            <div className="h-32 w-32 rounded-full bg-zinc-800"></div>
            <p className="text-lg font-bold">Fatur Shau</p>
            <p className="text-center lg:mx-10">
              Best post on Copywriting • Comedy • Style
            </p>
          </section>

          {/* contact content */}
          <section className="basis-3/4 px-4">
            <h1 className="mb-6 text-2xl font-bold md:text-center lg:text-3xl">
              Contact Me
            </h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* advice & question */}
            <section className="pt-8">
              <h3 className="font-bold uppercase lg:text-xl">
                advice & questions
              </h3>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                labore.
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <a href="" className="text-blue-600">
                  Est sapiente earum atque, harum aspernatur deleniti laboriosam
                  similique.
                </a>
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet.
                <a href="" className="text-blue-600">
                  Est sapiente earum atque.
                </a>
              </p>
            </section>
            {/* advice & question */}
            <section className="pt-8">
              <h3 className="font-bold uppercase lg:text-xl">
                advice & questions
              </h3>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                labore.
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <a href="" className="text-blue-600">
                  Est sapiente earum atque, harum aspernatur deleniti laboriosam
                  similique.
                </a>
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet.
                <a href="" className="text-blue-600">
                  Est sapiente earum atque.
                </a>
              </p>
            </section>
            {/* advice & question */}
            <section className="pt-8">
              <h3 className="font-bold uppercase lg:text-xl">
                advice & questions
              </h3>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                labore.
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <a href="" className="text-blue-600">
                  Est sapiente earum atque, harum aspernatur deleniti laboriosam
                  similique.
                </a>
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet.
                <a href="" className="text-blue-600">
                  Est sapiente earum atque.
                </a>
              </p>
            </section>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-lg px-4 py-8 lg:justify-center">
        <h2 className="mb-6 text-xl font-bold md:text-center lg:text-2xl">
          Reach Me!
        </h2>
        <div className="flex flex-col gap-2 pt-2 lg:mx-auto lg:w-1/2">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/fatur_shau.png"
              alt=""
              className="h-8 w-8 rounded-full"
            />
            email@email.com
          </a>
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/fatur_shau.png"
              alt=""
              className="h-8 w-8 rounded-full"
            />
            email@email.com
          </a>
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/fatur_shau.png"
              alt=""
              className="h-8 w-8 rounded-full"
            />
            email@email.com
          </a>
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/fatur_shau.png"
              alt=""
              className="h-8 w-8 rounded-full"
            />
            email@email.com
          </a>
        </div>
      </section>
    </>
  );
};

export default page;
