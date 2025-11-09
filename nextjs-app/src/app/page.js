import Image from 'next/image'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Content from './components/Content'
import Main from './components/Main'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <Content content="See what happens when you hover on me." randomColorOnHover="true" />
        <Main />
      </div>
    </div>
  )
}
