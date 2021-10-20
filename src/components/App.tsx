import React, { useState, useRef } from "react";
import Loader from "./Loader";
import Car from "./Car";

export default function App(): JSX.Element {
	const [loading, setLoading] = useState<Boolean>(false);
	const [caption, setCaption] = useState<string>("");
	// Input refs
	const refName = useRef<HTMLInputElement>(null);
	const refTelephone = useRef<HTMLInputElement>(null);
	const refCIN = useRef<HTMLInputElement>(null);
	const refAppelation = useRef<HTMLInputElement>(null);
	const refBirthday = useRef<HTMLInputElement>(null);
	const refDestination = useRef<HTMLInputElement>(null);
	const refTravelDate = useRef<HTMLInputElement>(null);
	const refCar = useRef<HTMLSelectElement>(null);

	// When form is submitted
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCaption("");
		setLoading(true);
		const params = {
			name: refName?.current?.value,
			telephone: refTelephone?.current?.value,
			appelation: refAppelation?.current?.value,
			birthday: refBirthday?.current?.value,
			destination: refDestination?.current?.value,
			travelDate: refTravelDate?.current?.value,
			car: refCar?.current?.value,
		};
		console.clear();
		console.log(params);
		setTimeout(() => {
			setLoading(false);
			setCaption("Personne inscrite avec succès !");
		}, 1500);
	};

	return (
		<div className="app">
			<form className="app__container" onSubmit={handleSubmit}>
				<h1 className="title">Manifold</h1>
				<div className="input-group">
					<h2 className="underline input-group-title">Informations personnelles</h2>
					<div className="group">
						{/* Name */}
						<div className="input-box">
							<label className="bold label" htmlFor="name">
								Nom entier *
							</label>
							<input
								className="input"
								name="name"
								type="text"
								placeholder="Nom et prénom"
								ref={refName}
								required
							/>
						</div>
						{/* Appelation */}
						<div className="input-box">
							<label className="bold label" htmlFor="appelation">
								Appelation *
							</label>
							<input
								className="input"
								name="appelation"
								type="text"
								placeholder="Comment on vous appelle ?"
								ref={refAppelation}
								required
							/>
						</div>
					</div>
					<div className="group">
						{/* Date de naissance */}
						<div className="input-box">
							<label className="bold label" htmlFor="birthday">
								Date de naissance
							</label>
							<input className="input" name="birthday" type="date" ref={refBirthday} />
						</div>
						{/* Telephone */}
						<div className="input-box">
							<label className="bold label" htmlFor="telephone">
								Téléphone
							</label>
							<input
								className="input"
								name="telephone"
								type="text"
								placeholder="Numéro de téléphone"
								ref={refTelephone}
							/>
						</div>
						{/* CIN */}
						<div className="input-box">
							<label className="bold label" htmlFor="CIN">
								CIN
							</label>
							<input
								className="input"
								name="CIN"
								type="text"
								placeholder="Numéro de CIN"
								ref={refCIN}
							/>
						</div>
					</div>
				</div>
				<div className="input-group">
					<h2 className="underline input-group-title">Informations de voyage</h2>
					<div className="group">
						{/* Date de voyage */}
						<div className="input-box">
							<label className="bold label" htmlFor="travelDate">
								Date du voyage *
							</label>
							<input
								className="input"
								name="travelDate"
								type="date"
								ref={refTravelDate}
								required
							/>
						</div>
						{/* CIN */}
						<div className="input-box">
							<label className="bold label" htmlFor="destination">
								Destination
							</label>
							<input
								className="input"
								name="destination"
								type="text"
								placeholder="Lieu de destination"
								ref={refDestination}
							/>
						</div>
					</div>
					<div className="group">
						{/* Voiture */}
						<div className="input-box">
							<label className="bold label" htmlFor="car">
								Numéro de la voiture *
							</label>
							<select className="input select" name="car" ref={refCar}>
								<option value="12Y8912">12Y8912</option>
							</select>
						</div>
					</div>
					<div className="group group-car">
						<Car />
						<figure className="car-image">
							<img className="image" src="assets/car.webp" alt="Car representation" />
						</figure>
					</div>
				</div>
				{/* Submit params */}
				{!loading && (
					<button className="submit" type="submit">
						S'inscrire
					</button>
				)}
				{loading && <Loader />}
				<p className="caption">{caption}</p>
			</form>
		</div>
	);
}
