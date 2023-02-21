// 💡 You can import assets like images directly and use them in your components:
import ChuckImage from '../assets/chuck_norris.jpg';

interface ChuckCardProps {
	greeting: string;
}

const ChuckCard: React.FC<ChuckCardProps> = ({ greeting }) => {

	return (
		<>
			<h2>{greeting}</h2>

			{/* <h2>{ greeting.greeting }</h2> <--- If not destructuring greeting you'd have to use dot notation*/}

			<img src={ChuckImage} alt='A handsome man' />
		</>
	)
}

export default ChuckCard;