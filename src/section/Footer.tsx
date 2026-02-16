import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--border-soft)] bg-[var(--bg-soft)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[var(--text-main)]">
              MyPortfolio
            </h3>
            <p className="text-sm text-[var(--text-muted)] mt-2 max-w-sm">
              Building clean and modern web experiences with passion and detail.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 text-xl text-[var(--text-muted)]">
            <a
              href="#"
              target="_blank"
              className="hover:text-sky-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[var(--border-soft)] text-center text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
