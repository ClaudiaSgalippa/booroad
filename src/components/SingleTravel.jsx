//importiamo link da react
import { Link } from "react-router-dom";

export default function SingleTravel(props) {
	const { trav } = props;

	return (
		<div className="col-5">
			<Link to={`/users/${trav.id}`}>
				<div className="bg-secondary fs-5">
					<p className="d-inline">{trav.destinazione}</p>
					<p className="d-inline"> - {trav.nazione}</p>
					<p className="mt-2">{trav.luogoDiCulto}</p>
					<p>{trav.dataInizio}</p>
					<p>{trav.dataFine}</p>
				</div>
			</Link>
		</div>
	);
}
