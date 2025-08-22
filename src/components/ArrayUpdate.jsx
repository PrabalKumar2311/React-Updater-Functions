import React, { useState } from 'react'

function ArrayUpdate() {

  const [foods, setFoods] = useState(["Apple", "Banana", "Pineapple"]);
  const [newFood, setNewFood] = useState("");

  function handleFoodChange(e){
    setNewFood(e.target.value);
  }

  function handleAddFood(){
    setFoods(foods => [...foods, newFood]);
  }


  return (
    <div>

    <input type="text" value={newFood} onChange={handleFoodChange}/>
    <button onClick={handleAddFood}>
      Add
    </button>

      {foods.map((food,index) => {
        return(
          <li key={index}>{food}</li>
        )
      })}
    </div>
  )
}

export default ArrayUpdate
