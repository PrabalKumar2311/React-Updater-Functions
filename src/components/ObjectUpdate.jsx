import {React, useState} from 'react'

function ObjectUpdate() {


  const [car,setCar] = useState({ year: 2024,
                                  make: "Ford",
                                  model: "Mustang"

  })

  function handleYearChange(e){
    setCar({...car, year: e.target.value})
  }

  function handleMakeChange(e){
    setCar({...car, make: e.target.value})
  }

  function handleModelChange(e){
    setCar({...car, model: e.target.value})
  }

  return (
    <div>
      <h2>Fav car is : {car.year} {car.make} {car.model}</h2>

      Year <input type='number' onChange={handleYearChange} value={car.year}></input> <br/>
      Make <input type='text' onChange={handleMakeChange} value={car.make}></input> <br/>
      Model <input type='text' onChange={handleModelChange} value={car.model}></input> <br/>
    </div>
  )
}

export default ObjectUpdate
