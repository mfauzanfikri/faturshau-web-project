"use client";

import { ChangeEvent, useRef, useState } from "react";
import validator from "validator";

const Hero = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const heroInputRef = useRef<HTMLInputElement>(null);
  const msgSpanRef = useRef<HTMLSpanElement>(null);

  const handleSubscribe = () => {
    if (input === "") {
      return false;
    }

    if (!validator.isEmail(input)) {
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

    if (msgSpanRef && msgSpanRef.current) {
      msgSpanRef.current.textContent = "";
    }

    if (email !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }

    if (!validator.isEmail(email) && email !== "") {
      setIsValid(false);
    } else {
      setIsValid(true);
      if (msgSpanRef && msgSpanRef.current) {
        msgSpanRef.current.textContent = "a";
      }
    }

    setInput(email);
  };

  return (
    <section className="text-light bg-[#0E100F] px-4 py-10 md:px-10 md:py-16 xl:py-24">
      <div className="mx-auto md:flex lg:max-w-7xl">
        <div className="mx-auto md:w-[70%] md:p-6">
          <div className="mb-2">
            <h1 className="heading text-[24px] font-black capitalize leading-9 sm:text-[40px] sm:leading-[3rem] lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight 2xl:text-6xl 2xl:leading-tight">
              The{" "}
              <span className="relative">
                <span className="line-through">Funniest</span>{" "}
                <span className="absolute left-[25%] -translate-y-[80%] -rotate-12 font-gochi font-normal text-blue-600">
                  Finest
                </span>
              </span>{" "}
              Copywriter <br /> Showing you how to <br /> Own your style
            </h1>

            <p className="mt-5 text-xs font-semibold md:text-sm xl:text-lg 2xl:text-xl">
              Only with what you have right now. Like...Email?!
            </p>

            <p className="mb-4 mt-6 max-w-sm text-lg sm:max-w-none lg:mb-5 lg:mt-5 xl:mt-8 xl:text-xl 2xl:text-2xl">
              Yo Homie! My name is Fatur Shau and I&apos;m self-styled
              <br />
              as the{" "}
              <b className="font-extrabold">
                “<u>punnyest</u>“
              </b>{" "}
              copywriter.
            </p>

            <p className="mb-4 mt-6 max-w-sm text-lg font-semibold sm:max-w-none lg:mb-5 lg:mt-5 xl:mt-8 xl:text-xl 2xl:text-2xl">
              Don&apos;t believe me?
            </p>

            <p className="mb-5 mt-6 max-w-sm text-lg sm:max-w-none lg:mb-5 lg:mt-5 xl:mt-8 xl:text-xl 2xl:text-2xl">
              Join the <b>1% stylish copywriters</b>. IF my DAILY emails
              don&apos;t <br className="hidden sm:block" />
              give you a single <br className="hero-br sm:hidden" />
              <b className="font-extrabold">
                “<u>Haha Moment</u>“
              </b>{" "}
              … Call me a fraud* <br className="hidden sm:block" /> and
              unsubscribe.
            </p>
            <p className="mt-5 text-xs font-semibold italic md:text-sm xl:text-lg 2xl:text-xl">
              Homies join for free below.
            </p>
          </div>
          <div className="mt-4 flex flex-col">
            <div>
              <input
                onChange={handleInput}
                className="text-dark w-full rounded border border-zinc-400 p-3 text-sm focus:border-zinc-600 xl:text-lg"
                type="email"
                placeholder=">>> Your Best Email"
              />
            </div>

            <p
              className={`${
                isError || !isValid || isDone ? "visible" : "invisible"
              } mb-[0.1rem] mt-[0.15rem] text-xs ${
                isError || !isValid ? "text-red-500" : "text-green-600"
              }`}
            >
              <span className="invisible" ref={msgSpanRef}>
                a
              </span>
              {isError && "Don’t use your “swipe-files” emails!"}
              <br className={`${isError && !isValid ? "" : "hidden"}`} />
              {!isValid && "Email is not valid. Try using your main email."}
              {isDone &&
                "Success! Now check your email to confirm your subscription."}
            </p>

            <div>
              <button
                disabled={(isLoading || isEmpty || !isValid) && true}
                onClick={handleSubscribe}
                className="text-light w-full rounded border border-zinc-400 bg-zinc-800 py-1.5 font-bold text-zinc-200 disabled:cursor-default disabled:bg-zinc-900 lg:py-2 lg:text-lg xl:py-3 xl:text-xl"
              >
                Subscribe
              </button>

              <div className="mt-5">
                <p className="text-[8px] lg:text-xs xl:text-sm">
                  *NO <u>PLEASE DON&apos;T</u>! <br className="md:hidden" />{" "}
                  Just unsubscribe and go away in peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
