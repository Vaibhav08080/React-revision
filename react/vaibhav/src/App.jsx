import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Functionalcomponent } from './functionalcomp'
import { ProductFunction } from './products'
import { Productshow } from './products/main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      hw
      <Functionalcomponent/>
      <ProductFunction/>
      <Productshow/>
    </div>
    </>
  )
}

export default App
