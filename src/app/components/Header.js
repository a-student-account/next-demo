import { BookOpenIcon } from "@heroicons/react/24/solid"

// inside Header.jsx
export default function Header({
  title = 'My First React Page is LIVE! 🎉🎉',
  subtitle = 'Here you find out information about my first Next Page',
}) {
  return (
    <section>
      <header className="flex flex-col gap-y-6">
        <h1 className="text-2xl fold-bold inline text-blue-400">{title}</h1>
        <h2>{subtitle}</h2>
      </header>
    </section>
    
  )
}
