import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Carousel from '../components/carousel';
import Features from '../components/features';
import Requirements from '../components/requirements';
import TopScores from '../components/topScores';
import Footer from '../components/footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Carousel />
      <Features />
      <Requirements />
      <TopScores />
      <Footer />
    </>
  )
}
