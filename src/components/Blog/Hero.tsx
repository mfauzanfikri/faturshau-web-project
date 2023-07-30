"use client";

import { ChangeEvent, useState } from "react";
import "./Blog.css";
import Image from "next/image";
import validator from "validator";

const Hero = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubscribe = () => {
    let data;

    if (input === "") {
      console.log("input empty");
      return false;
    }

    if (!validator.isEmail(input)) {
      console.log("input is not an email");
      return false;
    }
    console.log(isLoading);
    setIsLoading(true);

    fetch("https://api.convertkit.com/v3/forms?api_key=cskDra9H5n8_PWXK4NIXeA")
      .then(async (res) => {
        const data = await res.json();

        return data;
      })
      .then((res) => {
        console.log(res);
        setIsDone(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
          setIsDone(false);
        }, 2500);
      });

    console.log("input valid. Input: " + input);

    // const response = await fetch(
    //   "https://api.convertkit.com/v3/forms/5429265/subscribe",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8",
    //     },
    //     body: JSON.stringify({
    //       api_key: "cskDra9H5n8_PWXK4NIXeA",
    //       email: "mfauzanfikri55@gmail.com",
    //     }),
    //   },
    // );
    // const data = await response.json();
    // console.log({ data });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setInput(email);
  };

  return (
    <section className="text-light relative overflow-hidden bg-zinc-900 px-5 pb-12 pt-8 md:flex md:gap-4 md:px-12 lg:px-12 lg:pb-24 lg:pt-8 xl:px-10 xl:pb-36 xl:pt-8 2xl:h-[calc(100vh-61.7px)] 2xl:px-36 2xl:pt-28">
      {/* caption */}
      <div className="flex flex-1 flex-col justify-center gap-4">
        <div>
          <h1 className="text-3xl font-bold capitalize xl:text-[2.3rem] xl:leading-tight 2xl:text-7xl 2xl:leading-tight">
            killer copy <br /> comedic flair <br /> own your style
          </h1>
          <p className="mb-2.5 mt-3 max-w-xs font-semibold md:max-w-sm md:text-lg lg:mb-5 lg:mt-8 lg:max-w-xl 2xl:max-w-2xl">
            Join the <b>1% stylish copywriters</b>. IF my DAILY emails don’t
            give you a single{" "}
            <b>
              “<u>Haha Moment</u>“
            </b>{" "}
            … Call me a fraud* and unsubscribe.
          </p>
          <p className="font-semibold italic md:text-lg">
            Always join for free below.
          </p>
        </div>
        <div className="relative flex flex-col gap-6 md:max-w-md lg:max-w-xl lg:flex-row">
          <div className="relative lg:w-3/5">
            <input
              className="md:text-md w-full border-b border-b-zinc-400 bg-transparent p-3 text-sm focus:outline-none"
              type="email"
              placeholder=">>> Your Best Email"
              onChange={handleInput}
            />
            <div className={`absolute right-0 top-2 ${!isLoading && "hidden"}`}>
              {/* loading */}
              <svg
                aria-hidden="true"
                className={`${
                  isDone && "hidden"
                } mr-2 h-6 w-6 animate-spin fill-white text-gray-200 dark:text-gray-600 md:h-8 md:w-8`}
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              {/* check */}
              <svg
                className={`${
                  !isDone && "hidden"
                } h-6 w-6 stroke-green-500 md:h-8 md:w-8`}
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="checkPath checkAnimate"
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* subscribe button */}
          <button
            disabled={isLoading && true}
            onClick={handleSubscribe}
            className="text-light md:text-md rounded border border-zinc-400
            bg-zinc-800 py-1.5 font-bold hover:opacity-95 disabled:bg-zinc-900 lg:mt-0 lg:px-8"
          >
            Subscribe
          </button>
        </div>
        <div className="pt-4">
          <p className="text-[8px] lg:text-xs">
            *NO <u>PLEASE DON’T</u>! <br className="md:hidden" /> Just
            unsubscribe and go away in peace.
          </p>
        </div>
      </div>

      {/* hero image */}
      {/* <div className="hidden lg:flex lg:flex-1 lg:items-end lg:justify-end">
        <Image
          src="/images/fatur_shau_alt_2.png"
          width={500}
          height={500}
          alt="Fatur Shau"
          className="h-full w-auto"
          priority={true}
        />
      </div> */}

      <Image
        src="/images/fatur_shau_alt_2.png"
        width={1000}
        height={1000}
        alt="Fatur Shau"
        className="absolute bottom-0 right-0 z-0 hidden h-[90%] w-auto lg:block xl:right-16 2xl:right-20"
        priority={true}
      />
    </section>
  );
};

export default Hero;
