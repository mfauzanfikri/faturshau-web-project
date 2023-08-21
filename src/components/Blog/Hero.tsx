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
    <section className="text-light bg-neutral-700 px-4 py-10 md:px-10 md:py-16 xl:py-24">
      <div className="mx-auto md:flex lg:max-w-7xl">
        <div className="md:w-[55%] md:p-6">
          <div>
            <h1 className="text-3xl font-bold lg:text-4xl xl:text-6xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="mb-2 mt-1 text-xl lg:text-2xl xl:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="lg:text-lg xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              exercitationem aut autem, illum suscipit esse?
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
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-[45%] md:p-6">
          <div className="h-24 w-24 bg-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
