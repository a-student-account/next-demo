import { BookOpenIcon } from "@heroicons/react/24/solid"

export default function Header() {
  return (
    <header className="flex flex-col gap-y-6">
      <h1 className="text-2xl fold-bold inline text-blue-400">My First React Page is LIVE! <BookOpenIcon className = 'w-8 h-8 inline' /></h1>
      <h2>Here you find out information about my first React Page</h2>
    </header>
  )
}
