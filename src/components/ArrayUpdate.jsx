import {React, useState} from 'react'

function ArrayUpdate() {

  const [foods,setFoods] = useState(["Apple","Banana","Coconut"]);
  const [newFood,setNewFoods] = useState("");


  function handleInputChange(e){
    setNewFoods(e.target.value);
  }

  function addFood(){
    if(newFood.trim().length != 0){

      console.log(foods);
      //If i try to acces the updated state here it wont be shown because 
      // the state is updated but the component has not rerendered yet 

      //For printing the updated array then i have to first store it in a variable with the previous state and 
      setFoods([...foods, newFood]);
      const next = [...foods, newFood];
      console.log('updated foods:', next);  

    }
  }


  return (
    <div>
      {foods.map((food, index)=>{
        return(
          <li key={index}>{food}</li>
        )
      })}

      <input type='text' value={newFood} onChange={handleInputChange}/>
      <button onClick={addFood}>Add</button>
    </div>
  )
}

export default ArrayUpdate
