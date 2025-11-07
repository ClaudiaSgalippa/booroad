//importiamo link da react
import { Link } from "react-router-dom";

export default function SingleTravel(props) {
	const { trav } = props;

	return (
		<div className="col-5">
			<Link to={`/users/${trav.id}`}>
				<div className="bg-secondary p-3">
					<h3>{trav.destinazione}</h3>
					<h5>{trav.nazione}</h5>
					<i>{trav.dataInizio}</i>
					<p>{trav.dataFine}</p>
					<em>{trav.luogoDiCulto}</em>
				</div>
			</Link>
		</div>
	);
}