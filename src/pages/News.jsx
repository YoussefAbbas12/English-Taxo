import '../components/new/News.css'
import NavBar from '../layouts/NavBar/NavBar'
import Hero from '../components/new/Hero'
import NewsContainer from '../components/new/NewsContainer'

const News = () => {
  return (
    <div>
        <NavBar  isHome={false}/>
        <Hero />
        <NewsContainer />
    </div>
  )
}

export default News
