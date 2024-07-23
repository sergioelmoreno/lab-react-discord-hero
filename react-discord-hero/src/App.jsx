import './App.css'
import Navigation from './components/Navigation/Navigation'
import Section from './components/Section/Section'

const texts = {
  title: "Imagine a place...",
  paragraph: "...where you can belong to a school club, a gaming group, or a worldwide art community.Where just you and a handful of friends can spend time together.A place that makes it easy to talk every day and hang out more often."
}


function App() {

  return (
    <div className="App">
      <Navigation />
      <Section texts={texts} />
    </div>
  )
}

export default App
