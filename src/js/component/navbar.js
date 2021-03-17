import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="navbar-brand mb-0 h1">
					<img
						src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
						width="200"
						height="150"
					/>{" "}
				</div>
			</Link>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((favorite, i) => {
						return <Dropdown.Item key={i}>{favorite.name}</Dropdown.Item>;
					})}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
