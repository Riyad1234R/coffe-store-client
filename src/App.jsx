import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees,setCoffees]=useState(loadedCoffees)
  console.log(coffees)
  const [count, setCount] = useState(0)

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot cold Coffe:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
