

import { timerActions } from "@/actions/timer";

export default async function Home() {
  const timers = await timerActions.getTimers();

  console.log(timers);
  return (
    <div className="flex font-family-times  min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Welcome to Next.js with Cloudflare Workers!
      </h1>
    </div>
  );
}
