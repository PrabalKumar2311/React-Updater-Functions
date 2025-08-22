import React, { useEffect } from 'react'
import { useState } from 'react';

function ArrayOfObj() {

  const [cars,setCars] = useState([]);
  const [carYear,setCarYear] = useState(new Date().getFullYear());
  const [carMake,setCarMake] = useState("");
  const [carModel,setCarModel] = useState("");


  function handleYearChange(e){
    setCarYear(e.target.value);
  }

  function handleMakeChange(e){
    setCarMake(e.target.value);
  }

  function handleModelChange(e){
    setCarModel(e.target.value);
  }

  function addCar(){

    if( carYear > 1900 &&
      carMake.trim().length != 0 && 
    carModel.trim().length != 0){

      const newCar = { year: carYear,
                       make: carMake,
                       model: carModel
      }
  
    setCars(c => [...c, newCar]);

    setCarMake("")
    setCarModel("")
    }
  }

  useEffect(() => {
    console.log(cars[0])

  },[cars])

  return (

    <>

    {cars.map((car) => {
      return(
        <li key={Math.random()}>{car.year} {car.make} {car.model}</li>
      )
    })
  }


    <div>
      <input type="number" onChange={handleYearChange} value={carYear}/><br/>
      <input type="text" onChange={handleMakeChange} value={carMake}/><br/>
      <input type="text" onChange={handleModelChange} value={carModel}/><br/>
      <button onClick={addCar}>Add Car</button>

    </div>

    </>
  )
}

export default ArrayOfObj
