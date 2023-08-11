"use client";

const SignUpButton = () => {
  const scrollToFooterForm = () => {
    const footerForm = document.querySelector(".footer-form");
    footerForm?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className="text-light mt-2 rounded-sm bg-black px-5 py-2.5 font-semibold hover:opacity-95"
      onClick={scrollToFooterForm}
    >
      Sign up NOW!
    </button>
  );
};

export default SignUpButton;
