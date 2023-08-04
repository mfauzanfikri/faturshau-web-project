"use client";

import { ChangeEvent, useRef, useState } from "react";
import validator from "validator";

const FooterForm = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

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

          if (inputRef.current) {
            inputRef.current.value = "";
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

        if (inputRef.current) {
          inputRef.current.value = "";
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
    <>
      {/* subscribe card container */}
      <div className="hidden w-full items-center justify-center py-20 lg:flex">
        {/* subscribe card content  */}
        <div className="flex w-4/5 max-w-2xl flex-col gap-2 rounded border border-slate-300 bg-gray-50 px-8 py-20 text-center shadow-md shadow-slate-600">
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-2xl font-bold">
              Delivering one “Haha Moment” in the copywriting business every
              day.
            </h3>
            <p className="mt-5">
              Join the 1% stylish copywriters getting a laugh while learning
              today’s copywriting lessons.
            </p>
          </div>
          {/* subscribe input */}
          <div className="mt-3 flex flex-col items-center">
            <div className="mt-2 flex w-full justify-center gap-1.5">
              <input
                className="w-3/4 rounded-sm border border-slate-400 px-2 py-1 text-base"
                type="email"
                placeholder="Email"
                ref={inputRef}
                onChange={handleInput}
              />
              <button
                className="text-light bg-dark w-auto min-w-min rounded-sm px-2.5 py-2 text-base hover:bg-opacity-80 disabled:bg-zinc-900 disabled:text-zinc-300"
                disabled={(isLoading || isEmpty) && true}
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            <p
              className={`${
                isError || !isValid || isDone ? "visible" : "invisible"
              } mt-2.5 -translate-y-2 text-start text-xs ${
                isError || !isValid ? "text-red-700" : "text-green-600"
              }`}
            >
              <span className="invisible">a</span>
              {isError && "Don’t use your “swipe-files” emails!"}
              <br className={`${isError && !isValid ? "" : "hidden"}`} />
              {!isValid && "Email is not valid. Try using your main email."}
              {isDone &&
                "Success! Now check your email to confirm your subscription."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterForm;
