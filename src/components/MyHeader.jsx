import { useLocation, Link } from "react-router-dom";

export default function MyHeader() {
	const location = useLocation();

	return (
		<header className="bg-light">
			<div className="container-wide py-3 d-flex justify-content-between align-items-center">
				<h1 className="display-1">
					<Link to="/">BooRoad</Link>
				</h1>
				{location.pathname === "/users" && (
					<Link to="/" className="btn btn-primary">
						Torna alla Homepage
					</Link>
				)}
			</div>
		</header>
	);
}
