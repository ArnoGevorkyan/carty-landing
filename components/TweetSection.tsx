import { Tweet } from "./tweet";
import { components } from "./ui/my-tweet";

export default function TweetSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 text-center text-2xl font-semibold">Solo Developer Made $1M in 20 Days with a Telegram Mini App</h2>
        <div className="w-full">
          <Tweet id="1859321799395234133" components={components} />
        </div>
      </div>
    </section>
  );
} 