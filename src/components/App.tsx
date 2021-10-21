import React, { useState } from "react";
import Loader from "./Loader";
import Car from "./Car";
import Input from "./Input";
import { IUser } from "../types";

export default function App(): JSX.Element {
	const [input, setInput] = useState<IUser>({
		name: "",
		callingName: "",
		carNumber: "8981 TAB",
	});
	const [carList] = useState<Array<string>>([
		"1267 TBN",
		"8981 TAB",
		"6929 TAG",
	]);
	const [loading, setLoading] = useState<Boolean>(false);
	const [caption, setCaption] = useState<string>("");

	// When form is submitted
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCaption("");
		setLoading(true);
		console.clear();
		console.table(input);
		// Simulates waiting process
		setTimeout(() => {
			setLoading(false);
			setCaption("Personne inscrite avec succès !");
		}, 1500);
	};

	// Save our inputs the state
	const handleInput = (value: string | number | null, field: string): void => {
		const newInput = {
			...input,
			[field]: value,
		};
		setInput(newInput);
		console.clear();
		console.table(newInput);
	};

	return (
		<div className="app">
			<form className="app__container" onSubmit={handleSubmit}>
				<h1 className="title">Manifold</h1>
				<div className="input-group">
					<h2 className="underline input-group-title">Informations personnelles</h2>
					<div className="group">
						{/* First name and last name */}
						<Input
							defaultValue="hello"
							name="name"
							placeholder="Nom et prénom"
							label="Nom entier *"
							required
							atInput={handleInput}
						/>
						{/* Calling name */}
						<Input
							name="callingName"
							placeholder="Comment on vous appelle ?"
							label="Appelation *"
							required
							atInput={handleInput}
						/>
					</div>
					<div className="group">
						{/* Birthday */}
						<Input
							type="date"
							name="birthday"
							label="Date de naissance"
							atInput={handleInput}
						/>
						{/* Phone */}
						<Input
							name="phone"
							placeholder="Numéro de téléphone"
							label="Téléphone"
							atInput={handleInput}
						/>
						{/* National ID number */}
						<Input
							name="cin"
							placeholder="CIN"
							label="Numéro de CIN"
							atInput={handleInput}
						/>
					</div>
				</div>
				<div className="input-group">
					<h2 className="underline input-group-title">Informations de voyage</h2>
					<div className="group">
						{/* Travel date */}
						<Input
							type="date"
							name="travelDate"
							placeholder="Date du voyage *"
							required
							atInput={handleInput}
						/>
						{/* Destination place */}
						<Input
							name="destination"
							placeholder="Adresse de destination"
							label="Destination *"
							required
							atInput={handleInput}
						/>
					</div>
					{/* The car */}
					<Input
						type="select"
						name="carNumber"
						defaultValue={input.carNumber}
						label="Numéro de la voiture *"
						list={carList}
						atInput={handleInput}
					/>
					{/* <div className="group">
						<div className="input-box">
							<label className="bold label" htmlFor="car">
								Numéro de la voiture *
							</label>
							<select className="input select" name="car" ref={refCar}>
								<option value="12Y8912">12Y8912</option>
							</select>
						</div>
					</div> */}
					{input.callingName && input.callingName.length > 0 && (
						<div className="group group-car">
							<Car callingName={input.callingName} />
							<figure className="car-image">
								<img className="image" src="assets/car.jpg" alt="Car representation" />
							</figure>
						</div>
					)}
				</div>

				{/* Submit params */}
				<button
					className={loading ? "button button--disabled" : "button"}
					type="submit"
				>
					S'inscrire
				</button>

				{/* Loading */}
				{loading && <Loader />}

				{/* Error and success captions */}
				<p className="caption">{caption}</p>
			</form>
		</div>
	);
}
