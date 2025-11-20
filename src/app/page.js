import Header from './components/Header'
import Main from './components/Main'
import CardContainer from './components/CardContainer'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <Main>
          <CardContainer />
        </Main>
      </div>
    </div>
  )
}