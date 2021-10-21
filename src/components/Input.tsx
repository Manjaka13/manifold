/*
    Our input component
*/

import React, { useState, useEffect, useRef } from "react";
// We use uuid for generating unique keys
import { v4 as uniqueKey } from "uuid";
// Our types
import { IPropsInput } from "../types";

const Input: React.FC<IPropsInput> = ({
	defaultValue = null,
	name = `Input${Math.random()}`,
	type = "text",
	placeholder = "",
	label = "Input",
	required,
	atInput,
	list = [],
}): JSX.Element => {
	// Init our state
	const [inputValue, setInputValue] = useState<string>("");
	const refSelect = useRef<HTMLSelectElement>(null);

	// Handles changes to the input
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		setInputValue(value);
		if (atInput) atInput(value, name);
	};
	const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = e.target.value;
		setInputValue(value);
		if (atInput) atInput(value, name);
		// Blur select on selection
		refSelect?.current?.blur();
	};

	useEffect(() => {
		if (defaultValue) setInputValue(defaultValue);
	}, [defaultValue]);

	return (
		<div className="input-box">
			<label className="bold input-box__label" htmlFor={name}>
				{label}
			</label>
			{type === "select" && list && list.length > 0 && (
				<select
					className="input-box__input input-box__select"
					name={name}
					value={inputValue}
					onChange={handleChangeSelect}
					ref={refSelect}
				>
					{list.map((item) => (
						<option value={item} key={uniqueKey()}>
							{item}
						</option>
					))}
				</select>
			)}
			{type !== "select" && (
				<input
					className="input-box__input"
					name={name}
					type={type}
					placeholder={placeholder}
					value={inputValue}
					onChange={handleChange}
					required={required || false}
				/>
			)}
		</div>
	);
};

export default Input;
