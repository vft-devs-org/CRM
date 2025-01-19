import { DarkThemeToggle } from "flowbite-react";

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl dark:text-white">Flowbite React + Vite</h1>
      <DarkThemeToggle />
    </>
  );
}
