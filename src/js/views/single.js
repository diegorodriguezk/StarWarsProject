import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log("params=", params);
	let data = [];
	let description = null;

	if (params.type === "people") {
		data = store.people.filter(persona => persona.name === params.name);
		description = data[0];
		console.log("dataPeople=", data);
	} else if (params.type === "planet") {
		data = store.planets.filter(planeta => planeta.name === params.name);
		description = data[0];
		console.log("dataPlanets=", data);
	}

	return (
		<div className="card mb-3" style={{ maxWidth: "1150px" }}>
			{description && (
				<>
					<div className="row g-0">
						<div className="col-md-8">
							<img src="..." alt="..." />
						</div>
						<div className="col-md-4">
							<div className="card-body">
								<h5 className="card-title">{description.name} </h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dignissim nunc,
									id ultricies erat. Sed cursus eros a diam dapibus gravida. Nunc ac fermentum ex, sed
									porta risus.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
					<div className="row" style={{ width: "100%", marginBottom: "10rem", marginRight: "1rem" }}>
						{params.type === "people" && (
							<>
								<div className="col-sm-2">
									{" "}
									Name <br /> <br /> {description.name}{" "}
								</div>
								<div className="col-sm-2">
									Birth Year <br /> <br />
									{description.birth_year}{" "}
								</div>
								<div className="col-sm-2">
									{" "}
									Gender <br /> <br />
									{description.gender}{" "}
								</div>
								<div className="col-sm-2">
									height <br /> <br />
									{description.height}
								</div>
								<div className="col-sm-2">
									skin color <br /> <br /> {description.skin_color}{" "}
								</div>
								<div className="col-sm-2">
									{" "}
									eye color <br /> <br /> {description.eye_color}
								</div>
							</>
						)}
						{params.type === "planet" && (
							<>
								<div className="col-sm-2">
									Name <br /> <br />
									{description.name}{" "}
								</div>
								<div className="col-sm-2">
									Rotation Period
									<br /> <br /> {description.rotation_period}{" "}
								</div>
								<div className="col-sm-2">
									Orbital Period <br /> <br />
									{description.orbital_period}{" "}
								</div>
								<div className="col-sm-2">
									Diameter <br /> <br /> {description.diameter}{" "}
								</div>
								<div className="col-sm-2">
									terrain <br /> <br /> {description.terrain}
								</div>
								<div className="col-sm-2">
									Population <br /> <br /> {description.population}
								</div>
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
