import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1> People </h1>
			<div className="row">
				{store.people.map((persona, i) => (
					<div className="col-sm-4" key={i}>
						<div className="card" style={{ width: "100%", marginBottom: "1rem", marginRight: "1rem" }}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{persona.name}</h5>
								<p className="card-text" />
								<Link to={`/people/${persona.name}`} className="btn btn-primary">
									See more
								</Link>
								<button
									onClick={() => {
										actions.addFavorites(persona.name);
										console.log(store.favorites);
									}}>
									{" "}
									+{" "}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<h1> Planets </h1>
			<div className="row">
				{store.planets.map((planeta, i) => (
					<div className="col-sm-4" key={i}>
						<div className="card" style={{ width: "100%", marginBottom: "1rem", marginRight: "1rem" }}>
							<img src={planeta.film} />
							<div className="card-body">
								<h5 className="card-title">{planeta.name}</h5>
								<p className="card-text" />
								<Link to={`/planet/${planeta.name}`} className="btn btn-primary">
									See more
								</Link>
								<button onClick={() => actions.addFavorites(planeta.name)}> + </button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
