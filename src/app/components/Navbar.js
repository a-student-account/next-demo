import Button from './Button'
import Tag from './Tag'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
/*<div className="logo bg-indigo-600 rounded-full p-6 hover:scale-105 transition-all cursor-pointer"></div>
*/
const navigationButtons = [
  {
    title: 'Home',
    href: '/',
    isNew: false
  },
  {
    title: 'About',
    href: '/about',
    isNew: true
  }
]

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
      <AcademicCapIcon className='w-10 h-10 text-indigo-600'/>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({ title, href, isNew}) => 
          <Button href = {href} key = {title} classNameProp='flex'>
            {title}
            {isNew && <Tag classNames='ml-2 animate-pulse'/>}
          </Button>
        )}
      </div>
    </nav>
  )
}
