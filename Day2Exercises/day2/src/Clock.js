import React from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
       //function(){this.tick()}.bind(this), //same as previous, but function
       this.props.sleepTime    
        );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
        console.log("In render")
        return (
          <div>
            <h1>{this.props.txt}</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }

    function Clock(){
        return (
            <div>
            <Clock />
            </div>
        );
    }
    


 