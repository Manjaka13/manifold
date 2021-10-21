/*
	For displaying the car component
*/

import React, { useState } from "react";
// We use uuid for generating unique keys
import { v4 as uniqueKey } from "uuid";
// Import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";

// Register our icons for later use
library.add(faUser, faUserTie);

const Car: React.FC = (): JSX.Element => {
	let placeIndex = 0;
	// This represents the car places
	const [places] = useState<Array<Array<string>>>([
		["driver", "", ""],
		["", "", "", "", ""],
		["", "", "", "space", ""],
		["Kanto", "", "", "", ""],
	]);

	// Map our places to JSX elements
	const mappedPlaces = places.map((placesRow: Array<string>) => {
		const arr: Array<JSX.Element> = [];
		for (const place of placesRow) {
			switch (place) {
				case "driver":
					arr.push(
						<div className="place driver" key={uniqueKey()} title="Chauffeur">
							<Icon className="icon" icon="user-tie" />
							<p className="place-label">Chauffeur</p>
						</div>
					);
					break;
				case "space":
					arr.push(<div className="place space" key={uniqueKey()}></div>);
					break;
				case "":
					arr.push(
						<div className="place empty" key={uniqueKey()} title="Place libre">
							<p className="index">{placeIndex}</p>
						</div>
					);
					break;
				default:
					arr.push(
						<div className="place person" key={uniqueKey()} title={place}>
							<Icon className="icon" icon="user" />
						</div>
					);
			}
			placeIndex++;
		}
		return (
			<div className="row" key={uniqueKey()}>
				{arr}
			</div>
		);
	});

	return (
		<div className="car">
			<p className="bold text vehicle-number">5 / 10 place(s) disponible(s)</p>
			<p className="text vehicle-caption">Devant du véhicule</p>
			<div className="car-box">{mappedPlaces}</div>
			<p className="text vehicle-caption">Arrière du véhicule</p>
		</div>
	);
};

export default Car;
