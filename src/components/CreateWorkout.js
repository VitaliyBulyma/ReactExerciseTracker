
import React from 'react';
// import ListExercises from './ListExercise';
// import ListExercises from '../components/ListExercise';


class CreateWorkout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
      this.state = {length: ''};
      this.state = {data: []};
        
      // this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeLength = this.handleChangeLength.bind(this);      
      this.handleSelect = this.handleSelect.bind(this);      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
      await fetch('http://localhost:5000/exercises')
        .then(response => response.json())
        .then(data => this.setState({ data }));
        
    }

    // handleChangeTitle(event) {
    //   this.setState({title: event.target.value});   
    // }

    handleChangeLength(event) {
        
      this.setState({length: event.target.value});       
      
    }

    handleSelect(event){
      console.log(event.target.value);
      this.setState({title: event.target.value}); 
    }

    async handleSubmit(event) {
      alert('An exercise was submitted: ' + this.state.title);
      event.preventDefault();
       await fetch('http://localhost:5000/workouts', {
        method: 'post',
        // mode: 'no-cors',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            "title": this.state.title,
            "length": this.state.length,
            "user": "Vitaliy"          
        })
      });

      this.setState({title: ''});     
      this.setState({length: ''});    
      
    }
    
    render() {
      
      return (       
        
          <form onSubmit={this.handleSubmit}>
            <select id="select" onChange={this.handleSelect}>
              {this.state.data.map(item =>(                
                <option key={item._id} value={item.title} >{item.title}</option>                
              ))}
            </select> 
          <label>Duration</label>
            <input type="text" value={this.state.length} onChange={this.handleChangeLength} />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>        

      );
    }
  }

  export default CreateWorkout;
