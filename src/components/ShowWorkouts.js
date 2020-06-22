import React, {useState, useEffect} from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';


function ShowWorkouts() {
    useEffect(()=>{
        fetchItems();
    },[]);
const [exercises, setItems] = useState([]);

async function handleDelete(event){
    event.preventDefault();
    // console.log("the link was clicked");
    const url = 'http://localhost:5000/workouts/'+event.target.value;
    // console.log(event.target.value); 
    await fetch(url, {
        method: 'delete'

      });   
     
      fetchItems();  
       
}

    const fetchItems = async ()=>{
        const data = await fetch('http://localhost:5000/workouts');
        const exercises = await data.json();        
        setItems(exercises);
    }
  return (
    <div className="App">
<Table striped bordered hover variant="light">
  <thead className="thead-dark">
    <tr>
      
      <th>Name</th>
      <th>Duration</th>
      <th>Date</th>
      <th>Delete</th>
      <th>Edit</th>
    </tr>
  </thead>

  <tbody>
  {exercises.map(item =>(
    
    <tr>
      
      <td>{item.title}</td>
      <td>{item.length}</td>
      <td>{item.date.toString().slice(0,10) +" at: " + item.date.toString().slice(11,19) }</td>
      <td><button className="btn btn-primary" value={item._id} onClick={handleDelete}>Delete</button></td>
      <td><button className="btn btn-primary" value={item._id} ><a id="buttonLink" href={'/editworkout/'+item._id}>Edit</a></button></td>
    </tr>
    ))} 
  </tbody>
</Table>
          
             
              
    </div>
  );
}

export default ShowWorkouts;