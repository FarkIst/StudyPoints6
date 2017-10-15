import React, {Component} from 'react';
import Jokes from './jokesStore';


export default class JokeComponent extends Component {

    constructor(){
        super();
        Jokes.addJoke("A ham sandwich walks into a bar and orders a beer. Bartender says, 'Sorry we don't serve food here.'");
        Jokes.addJoke("Two peanuts were walking down the street. One was a salted");
        Jokes.addJoke("I used to have a job at a calendar factory but I got the sack because I took a couple of days off.");
    }

    render(){

        return (
            <div> 
                <p>{Jokes.getRandomJoke()}</p>
                <p>{Jokes.getRandomJoke()}</p>
                <p>{Jokes.getRandomJoke()}</p>
            </div>
        )
    }
}
