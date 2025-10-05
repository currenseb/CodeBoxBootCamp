import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 bg-[length:200%_200%] animate-gradient">
      <main className="flex flex-col items-center gap-8">
        {/* Welcome Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
          Curren Sebastian
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-xl">
          Cal Poly SLO Computer Science Class of 2027
        </p>

        <p className="text-lg sm:text-xl text-gray-200 max-w-xl">
          Former UI/UX Developer Intern @ Cru
        </p>

        {/* Links - All 3 buttons side by side */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="/Curren_Sebastian_Resume_Fall_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 text-white font-medium text-lg px-6 py-3 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition"
          >
            📄 View My Resume
          </a>

          <a
            href="https://github.com/currenseb"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 text-white font-medium text-lg px-6 py-3 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition"
          >
            💻 Visit My GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/currensebastian"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#0A66C2] text-white font-medium text-lg px-6 py-3 hover:bg-[#004182] shadow-lg shadow-blue-600/40 transition"
          >
            🔗 LinkedIn
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-400">
        Built with <span className="text-blue-400 font-semibold">Next.js</span> and <span className="text-pink-400 font-semibold">TailwindCSS</span>.
      </footer>
    </div>
  );
}
