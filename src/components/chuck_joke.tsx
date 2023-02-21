import Joke from "../joke";

const ChuckJoke: React.FC<Joke> = ({joke, id}) => <p key={id}>{joke}</p>

// How to access props when you pass the whole object/different way of doing it
// When we pass properties down to our Components, they get bundled up into the Props object,
// so below we are saying that we are passing our "joke" prop object, which is an object, that
// has properties joke: string, and id: number
 
// const ChuckJoke: React.FC<{ joke: { joke: string, id: number} }> = ({joke}) => 
// <p key={joke.id}>{joke.joke}</p> 

export default ChuckJoke;