
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Hyphenated</h1>
      <p className="mb-6 text-lg">
        A cultural collective bridging club music, queer expression, and community-based art.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Now Playing</h2>
        <Link href="https://soundcloud.com/hekusai/genuineerror" target="_blank">
          <Button>Listen on SoundCloud</Button>
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Hyphenated
      </footer>
    </div>
  );
}
