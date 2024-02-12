import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://faturshau.com"),
  title: "Contact Me | Fatur Shau",
  description: "The best way to contact Fatur Shau.",
  openGraph: {
    title: "Contact Me | Fatur Shau",
    description: "The best way to contact Fatur Shau.",
    url: "https://faturshau.com/contact",
    siteName: "",
    // images: "",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Me | Fatur Shau",
    description: "Here's how to contact Fatur Shau",
    siteId: "1576028678462394368",
    creator: "thestorystylist",
    creatorId: "1576028678462394368",
    // images: "",
  },
};

const page = () => {
  return (
    <>
      <section className="flex justify-center bg-white py-8 lg:py-12 2xl:pb-24 2xl:pt-16">
        <div className="flex">
          {/* contact content */}
          <section className="px-4">
            <h1 className="mb-6 text-center text-2xl font-bold lg:text-3xl 2xl:text-4xl">
              Contact Me
            </h1>
            <p className="mt-2">
              Thanks for your interest in contacting me. I appreciate it.
            </p>
            <p className="mt-2">
              The best way to contact me is via this email:
            </p>
            <p className="mt-2">
              <a
                href="mailto:shau@faturshau.com"
                className="text-blue-500 underline visited:text-blue-400 hover:text-blue-300"
              >
                shau@faturshau.com
              </a>
            </p>
            <p className="mt-2">Please keep the message short and clear.</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
