"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import validator from "validator";
import "./Home.css";

const Hero = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const heroInputRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = () => {
    if (input === "") {
      console.log("input empty");
      return false;
    }

    if (!validator.isEmail(input)) {
      console.log("input is not an email");
      return false;
    }

    setIsLoading(true);

    fetch(`https://api.convertkit.com/v3/forms/5446548/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
        email: input,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .then((res) => {
        if (res.error) {
          setIsLoading(false);
          setIsError(true);

          if (heroInputRef.current) {
            heroInputRef.current.value = "";
            setInput("");
          }

          setTimeout(() => {
            setIsError(false);
          }, 2000);

          return false;
        }

        console.log(res);
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
        }, 3000);
        setIsLoading(false);

        if (heroInputRef.current) {
          heroInputRef.current.value = "";
          setInput("");
        }
      });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }

    const email = e.target.value;

    if (email !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }

    if (!validator.isEmail(email) && email !== "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setInput(email);
  };

  return (
    <section className="text-light relative overflow-hidden bg-[#0E100F] px-5 pb-12 pt-8 md:flex md:gap-4 md:px-12 lg:px-12 lg:pb-24 lg:pt-8 xl:px-24 xl:pb-36 xl:pt-16 2xl:min-h-[calc(100vh-70.95px)] 2xl:px-36 2xl:pt-32">
      {/* caption */}
      <div className="z-10 flex flex-1 flex-col gap-4">
        <div>
          <h1 className="text-3xl font-extrabold capitalize md:text-4xl lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight 2xl:text-7xl 2xl:leading-tight">
            killer copy <br /> comedic flair <br /> own your style
          </h1>
          <p className="mb-2.5 mt-3 max-w-sm text-sm sm:max-w-none md:text-base lg:mb-5 lg:mt-4 xl:mt-8 xl:text-xl 2xl:text-2xl">
            Join the <b>1% stylish copywriters</b>. IF my DAILY emails don’t{" "}
            <br className="hidden sm:block" />
            give you a single{" "}
            <b className="font-extrabold">
              “<u>Haha Moment</u>“
            </b>{" "}
            … Call me a fraud* <br className="hidden sm:block" /> and
            unsubscribe.
          </p>
          <p className="text-sm font-semibold italic md:text-base xl:text-xl 2xl:text-2xl">
            Always join for free below.
          </p>
        </div>

        <div className="relative flex flex-col md:max-w-md lg:max-w-xl lg:flex-row lg:gap-4">
          <div className="relative lg:w-3/5">
            <input
              className="w-full border-b border-b-zinc-400 bg-transparent p-3 text-sm focus:outline-none md:text-base xl:text-lg"
              type="email"
              placeholder=">>> Your Best Email"
              onChange={handleInput}
              ref={heroInputRef}
            />

            <p
              className={`${
                isError || !isValid || isDone ? "visible" : "invisible"
              } mt-2 -translate-y-2 text-xs lg:hidden ${
                isError || !isValid ? "text-red-700" : "text-green-600"
              }`}
            >
              <span className="invisible">a</span>
              {isError && "There’s something wrong. Try again later."}
              <br className={`${isError && !isValid ? "" : "hidden"}`} />
              {!isValid && "Email is not valid. Try again later."}
              {isDone &&
                "Success! Now check your email to confirm your subscription."}
            </p>

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
            disabled={(isLoading || isEmpty) && true}
            onClick={handleSubscribe}
            className="md:text-md bg-light text-dark rounded py-1.5
            font-bold hover:opacity-95 disabled:bg-zinc-200 disabled:text-zinc-900 disabled:hover:opacity-100 lg:mt-0 lg:px-8 xl:text-lg"
          >
            Subscribe
          </button>
        </div>

        <p
          className={`${
            isError || !isValid || isDone ? "visible" : "invisible"
          } mt-1 hidden -translate-y-2 text-xs lg:block ${
            isError || !isValid ? "text-red-700" : "text-green-600"
          }`}
        >
          <span className="invisible">a</span>
          {isError && "There’s something wrong. Try again later."}
          <br className={`${isError && !isValid ? "" : "hidden"}`} />
          {!isValid && "Email is not valid. Try again later."}
          {isDone &&
            "Success! Now check your email to confirm your subscription."}
        </p>

        <div className="pt-4">
          <p className="text-[8px] lg:text-xs xl:text-sm">
            *NO <u>PLEASE DON’T</u>! <br className="md:hidden" /> Just
            unsubscribe and go away in peace.
          </p>
        </div>
      </div>

      {/* hero image */}
      <Image
        src="/images/fatur_shau_alt.png"
        width={2745}
        height={3750}
        alt="Fatur Shau"
        className="absolute bottom-0 right-12 z-0 hidden h-[95%] w-auto lg:block xl:right-24 2xl:right-36"
        priority={true}
      />
    </section>
  );
};

export default Hero;
