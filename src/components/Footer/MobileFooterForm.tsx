"use client";

import { ChangeEvent, useRef, useState } from "react";
import validator from "validator";

const MobileFooterForm = () => {
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
      {/* mobile subsribe form */}
      <div className="mb-8 flex flex-col gap-1.5 px-6 py-2 md:px-16 lg:hidden">
        <div className="flex flex-col items-center py-2 text-center">
          <h3 className="mb-1.5 text-2xl font-bold md:max-w-md">
            Delivering one “Haha Moment” in the copywriting business every day.
          </h3>
          <p className="mb-1 md:max-w-sm">
            Join the 1% stylish copywriters getting a laugh while learning
            today’s copywriting lessons.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <div className="md:w-3/5">
            <input
              className="w-full rounded border border-transparent border-b-slate-400 p-3 text-sm focus:border-slate-400 focus:outline-0"
              type="email"
              placeholder=">>> Your Best Email"
              ref={inputRef}
              onChange={handleInput}
            />
          </div>
          <div>
            <p
              className={`${
                isError || !isValid || isDone ? "visible" : "invisible"
              } mt-2 -translate-y-2 text-xs ${
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
          <div className="md:w-3/5">
            <button
              className="text-light bg-dark w-full rounded-sm py-1.5 disabled:bg-zinc-900 disabled:text-zinc-300"
              disabled={(isLoading || isEmpty) && true}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooterForm;
