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
import { IPropsCar } from "../types";

// Register our icons for later use
library.add(faUser, faUserTie);

const Car: React.FC<IPropsCar> = ({ callingName }): JSX.Element => {
	// This represents the car places
	const [seats, setSeats] = useState<Array<Array<string>>>([
		["driver", "", ""],
		["", "", "", "", ""],
		["", "", "", "space", ""],
		["Kanto", "", "", "", ""],
	]);

	// Select a seat
	const selectSeat = (position: Array<number>): void => {
		setSeats((prevState: any) => {
			let newState = [...prevState];
			newState = newState.map((seatRow, keyI) => {
				return seatRow.map((item: string, keyJ: number) =>
					item === "userSeat"
						? ""
						: keyI === position[0] && keyJ === position[1]
						? "userSeat"
						: item
				);
			});
			console.log(newState);
			return newState;
		});
		console.log(position);

		// console.log(selectedSeat);
	};

	// Map our places to JSX elements
	const mappedPlaces = seats.map((placesRow: Array<string>, key: number) => {
		const arr: Array<JSX.Element> = [];
		let i: number = key;
		for (let j: number = 0; j < placesRow.length; j++) {
			const place = placesRow[j];
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
						<div
							className="place empty"
							key={uniqueKey()}
							title="Place libre"
							onClick={() => {
								const key = j;
								selectSeat([i, key]);
							}}
						>
							<p className="index">{j + 1}</p>
						</div>
					);
					break;
				case "userSeat":
					arr.push(
						<div
							className="place user-seat"
							key={uniqueKey()}
							title={callingName}
							onClick={() => {
								const key = j;
								selectSeat([i, key]);
							}}
						>
							<Icon className="icon" icon="user" />
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
			// j++;
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
