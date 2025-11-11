import { useState } from "react";
import PersonList from "../components/PersonList";
import PersonsSearchBar from "../components/searchcomponents/PersonsSearchBar";

const TravelPage = () => {
	const [search, setSearch] = useState("");

	return (
		<>
			<div className="container-wide d-flex flex-wrap justify-content-center pt-4">
				<h1 className="pt-3 display-2 fw-semibold">Partecipanti al viaggio</h1>
				<PersonsSearchBar search={search} onSearch={setSearch} />
				<PersonList search={search} />
			</div>
		</>
	);
};

export default TravelPage;
