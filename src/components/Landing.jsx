import Header from './Header'
import Poster from './Poster'
import Slider from './Slider'
import Footer from './Footer'
import Category from './category'
import Feedback from './Feedback'
import Jourany from  './Jourany'


function Landing() {
  return (
    <div>
    {/* <Header/> */}
    <Poster/>
    <Category/>
    <Slider/>
    <Feedback/>
    <Jourany/>
    <Footer/>
    {/* <Signup/> */}
    {/* <Login/> */}
        
    </div>
  )
}

export default Landing