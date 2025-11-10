import { useParams } from "react-router-dom";
import viaggi from "../data/viaggi";
import SinglePerson from "./SinglePerson";

const PersonList = () => {
	const { id } = useParams();

	const viaggio = viaggi.find((v) => v.id === Number(id));

	const partecipanti = viaggio ? viaggio.partecipanti || [] : [];

	return (
		<div className="container-wide">
			{partecipanti.map((person) => (
				<SinglePerson key={person.id} person={person} />
			))}
		</div>
	);
};

export default PersonList;
