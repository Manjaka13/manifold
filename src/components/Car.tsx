import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faUserTie);

export default function Car(): JSX.Element {
	const [places, setPlaces] = useState<Array<Array<string>>>([
		["driver", "", ""],
		["", "", "", "", ""],
		["", "", "", "space", ""],
		["Kanto", "", "", "", ""],
	]);
	let placeIndex = 0;
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
		return <div className="row">{arr}</div>;
	});

	return (
		<div className="car">
			<p className="bold text vehicle-number">5 / 10 place(s) disponible(s)</p>
			<p className="text vehicle-caption">Devant du véhicule</p>
			<div className="car-box">{mappedPlaces}</div>
			<p className="text vehicle-caption">Arrière du véhicule</p>
		</div>
	);
}
