import React, {useState, useEffect} from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';


function ShowExercises() {
    useEffect(()=>{
        fetchItems();
    },[]);
const [exercises, setItems] = useState([]);

async function handleDelete(event){
    event.preventDefault();

    const url = 'http://localhost:5000/exercises/'+event.target.value;

    await fetch(url, {
        method: 'delete'

      });   
     
      fetchItems();  
       
}
    const fetchItems = async ()=>{
        const data = await fetch('http://localhost:5000/exercises');
        const exercises = await data.json();        
        setItems(exercises);
    }
  return (
    <div className="App">
<Table striped bordered hover variant="light">
  <thead className="thead-dark">
    <tr>      
      <th>Name</th>
      <th>Delete</th>
    </tr>
  </thead>

  <tbody>
  {exercises.map(item =>(
    
    <tr>      
      <td>{item.title}</td>     
      <td><button className="btn btn-primary" value={item._id} onClick={handleDelete}>Delete</button></td>     
    </tr>
    ))} 
  </tbody>
</Table>       
              
    </div>
  );
}

export default ShowExercises;