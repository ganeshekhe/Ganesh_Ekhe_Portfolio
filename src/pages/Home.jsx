

import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import ProjectsSection from "../sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsSection />

      {/* WhatsApp Floating Button */}
      {/* <a
        href="https://wa.me/919322945038"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white shadow-2xl rounded-full p-4 md:p-5 flex items-center justify-center transition-all duration-300 animate-bounce"
        style={{ zIndex: 9999 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.83 11.83 0 0 0 12 .67 11.84 11.84 0 0 0 3.48 3.48 11.84 11.84 0 0 0 .67 12a11.74 11.74 0 0 0 1.54 5.9L.62 23.38l5.63-1.55A11.85 11.85 0 0 0 12 23.33a11.84 11.84 0 0 0 8.52-3.48A11.83 11.83 0 0 0 23.33 12a11.83 11.83 0 0 0-2.81-8.52ZM12 21.12a9.11 9.11 0 0 1-4.67-1.29l-.34-.2-3.34.92.9-3.27-.22-.34A9.16 9.16 0 0 1 2.88 12 9.25 9.25 0 1 1 12 21.12Zm5.06-6.87c-.28-.14-1.64-.81-1.9-.9s-.44-.14-.62.14-.71.9-.87 1.09-.32.21-.59.07a7.67 7.67 0 0 1-2.27-1.4 8.57 8.57 0 0 1-1.59-2c-.17-.28 0-.43.12-.57s.28-.32.42-.48a1.88 1.88 0 0 0 .28-.48.51.51 0 0 0 0-.48c-.07-.14-.62-1.49-.85-2s-.45-.45-.62-.46H7.5a1 1 0 0 0-.73.34A3 3 0 0 0 6 7.94a5.15 5.15 0 0 0 1.08 3.2 11.83 11.83 0 0 0 4.61 4 15 15 0 0 0 1.57.58 3.77 3.77 0 0 0 1.72.11 2.86 2.86 0 0 0 1.87-1.32 2.34 2.34 0 0 0 .17-1.32c-.08-.14-.26-.21-.54-.35Z"/>
        </svg>
      </a> */}
      <a
  href="https://wa.me/919322945038?text=Hello%20Ganesh,%20I%20am%20contacting%20you%20from%20your%20Portfolio%20Website."
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white shadow-2xl rounded-full p-4 md:p-5 flex items-center justify-center transition-all duration-300 animate-bounce"
  style={{ zIndex: 9999 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.83 11.83 0 0 0 12 .67 11.84 11.84 0 0 0 3.48 3.48 11.84 11.84 0 0 0 .67 12a11.74 11.74 0 0 0 1.54 5.9L.62 23.38l5.63-1.55A11.85 11.85 0 0 0 12 23.33a11.84 11.84 0 0 0 8.52-3.48A11.83 11.83 0 0 0 23.33 12a11.83 11.83 0 0 0-2.81-8.52ZM12 21.12a9.11 9.11 0 0 1-4.67-1.29l-.34-.2-3.34.92.9-3.27-.22-.34A9.16 9.16 0 0 1 2.88 12 9.25 9.25 0 1 1 12 21.12Zm5.06-6.87c-.28-.14-1.64-.81-1.9-.9s-.44-.14-.62.14-.71.9-.87 1.09-.32.21-.59.07a7.67 7.67 0 0 1-2.27-1.4 8.57 8.57 0 0 1-1.59-2c-.17-.28 0-.43.12-.57s.28-.32.42-.48a1.88 1.88 0 0 0 .28-.48.51.51 0 0 0 0-.48c-.07-.14-.62-1.49-.85-2s-.45-.45-.62-.46H7.5a1 1 0 0 0-.73.34A3 3 0 0 0 6 7.94a5.15 5.15 0 0 0 1.08 3.2 11.83 11.83 0 0 0 4.61 4 15 15 0 0 0 1.57.58 3.77 3.77 0 0 0 1.72.11 2.86 2.86 0 0 0 1.87-1.32 2.34 2.34 0 0 0 .17-1.32c-.08-.14-.26-.21-.54-.35Z"/>
  </svg>
</a>

    </>
  );
}
