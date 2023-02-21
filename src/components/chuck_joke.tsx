import Joke from "../joke";

const ChuckJoke: React.FC<Joke> = ({joke, id}) => <p>{joke} {id}</p>

// Below shows how to access props when you pass the whole object down/ a different way of doing it from above
// When we pass properties down to our Components, they get bundled up into "the Props object",
// so below we are saying that we are passing our "joke" prop object, which is an object, that
// has properties joke: string, and id: number
// We have to use object dot notation to access these properties 
// Note this can be a bit confusing for people especially when the joke is an object with a property called object
 
// const ChuckJoke: React.FC<{ joke: { joke: string, id: number} }> = ({joke}) => 
// <p>{joke.joke} {joke.id}</p> 

export default ChuckJoke;