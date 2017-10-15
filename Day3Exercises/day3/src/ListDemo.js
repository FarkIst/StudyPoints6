import React, { Component } from 'react';

class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [],
            cars: new Cars().getAllCars()
        };
    }

    render() {
        return (
            <div>
                <NumberList numbers={this.state.numbers}/>
                <NumberTable numbers={this.state.numbers}/>
                <CarTable cars={this.state.cars}/>
            </div>
        );
    }
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
        <ListItem value={number} key={index}/>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function ListItem(props) {
    const value = props.value;
    return (
        <li>{value}</li>
    );
}

function NumberTable(props) {
    const rowItems = props.numbers.map((number,index) =>
        <tr key={index}><td>{number}</td></tr>
    );
    return (
        <table border="1">
            <tbody>
                {rowItems}
            </tbody>
        </table>
    )
}
class Cars {
    constructor() {
        this._data = [
            {"id": 1,"make": "VW", "model": "Golf", "year": 1948},
            {"id": 2,"make": "VW", "model": "Golf", "year": 1988},
            {"id": 3,"make": "Opel", "model": "Corsa", "year": 1998},
            {"id": 4,"make": "Opel", "model": "Kadett", "year": 1978},
            {"id": 5,"make": "Opel", "model": "Kadett", "year": 1991},
            {"id": 6,"make": "VW", "model": "UP", "year": 2008},
            {"id": 7,"make": "Opel", "model": "Corsa", "year": 2011},
            {"id": 8,"make": "Saab", "model":"Sonett", "year": 1965},
            {"id": 9,"make": "VW", "model":"UP", "year": 2004},
            {"id": 10,"make": "VW", "model":"Passat", "year": 2006},
            {"id": 11,"make": "Audi", "model":"A6", "year": 2008},
            {"id": 12,"make": "Saab", "model":"Sonett", "year": 2006},
            {"id": 13,"make": "Volvo", "model":"S90", "year": 2001},
            {"id": 14,"make": "Audi", "model":"A6", "year": 1999},
            {"id": 15,"make": "Volvo", "model":"S60", "year": 2011},
            {"id": 16,"make": "Audi", "model": "A3", "year": 2002}
        ];
    }

    getAllCars() {
        return this._data;
    }

    getCar(id) {
        return this._data.find((car) => car.id === id);
    }
}

function CarTable(props) {
    const rowItems = props.cars.map((car) =>
        <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
        </tr>
    );
    return (
        <table border="1">
            <tbody>
                {rowItems}
            </tbody>
        </table>
    )
}

export default ListDemo;