export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <span className="ml-3 text-xl">Nicholas Griffin</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Website by{' '}
          <a
            href="https://nicholasgriffin.dev/?utm_source=NEXT_SITE&utm_medium=FOOTER&utm_campaign=SITE_CREATION"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nicholas Griffin
          </a>
        </p>
      </div>
    </footer>
  );
};
