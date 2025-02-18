import './App.css'
// import './index.css'
import Header from './Components/Header/Header'
import { Carousel } from 'react-responsive-carousel'
import CarouselEffect from './Components/Carousel/Carousel'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'

function App() {

  return (
    <>
     <Header/>
     <Carousel/>
     <CarouselEffect/>
     <Category/>
     <Product/>
    </>
  )
}

export default App
