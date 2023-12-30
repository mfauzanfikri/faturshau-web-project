import BlogPost from "./BlogPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://faturshau.com"),
  title: "Fatur Shau - Blog",
  description:
    "Hey. I’m Fatur Shau. I’m the Storystylist Copywriter and comedian.",
  openGraph: {
    title: "",
    description: "",
    url: "https://faturshau.com",
    siteName: "",
    // images: "",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "",
    description: "",
    siteId: "",
    creator: "",
    creatorId: "",
    // images: "",
  },
};

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <BlogPost blogId={params.id} />
    </>
  );
};

export default page;
