import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: '',
        completed: ''
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then(response => response.json())
          .then(data => this.setState({
              title: data.title,
              completed: data.completed
          }));
    }


//   componentDidMount() {
//     console.log("componentDidmount");
//     //usually good for making AJAX calls and API requests
//   }

//   UNSAFE_componentWillMount() {
//       console.log('componentWillMount');
//   }

//   UNSAFE_componentDidUpdate() {
//       console.log('componentDidUpdate');
//   }

//   UNSAFE_componentWillUpdate() {
//       console.log('componentWillUpdate');
//   }

//   UNSAFE_componentWillReceiveProps(nextProps, nextState) {
//       console.log('componentWillReceiveProps');
//       //usually used in redux, for when you have real states in redux
//   }

//   static getDerivedStateFromProps(nextProps, prevstate) {
//       return {
//           test: 'fortune ikechi'
//       }
//        //this is a new version of componentWillReceiveProps
//   }
     
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//       console.log('componentWillReceiveProps...');
//       //not always used in applications, still new
//   }
      
  
  render() {
      const  { title, completed } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{completed}</p>
      </div>
    );
  }
}

export default Test;