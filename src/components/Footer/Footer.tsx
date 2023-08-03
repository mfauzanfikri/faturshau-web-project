import FooterForm from "./FooterForm";
import MobileFooterForm from "./MobileFooterForm";

const Footer = () => {
  return (
    <footer id="footer" className="mt-auto">
      <FooterForm />

      {/* contact */}
      <div className="my-2 flex justify-center">
        <a
          href="https://twitter.com/thestorystylist"
          target="_blank"
          className="bg-dark flex aspect-square items-center rounded-full p-3 hover:cursor-pointer hover:bg-opacity-95 md:p-4"
        >
          <svg
            className="w-6 fill-white md:w-8"
            viewBox="0 0 300 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
          </svg>
        </a>
      </div>

      <MobileFooterForm />

      {/* bottom footer */}
      <div className="text-light bg-dark flex justify-center py-1.5 text-center text-sm md:py-3 md:text-base">
        <p>&#169; 2023 The Storystylist | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
