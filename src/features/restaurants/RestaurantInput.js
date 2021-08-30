import React, { useState } from "react";

function RestaurantInput({ addResturant }) {
	const [formData, setFormData] = useState("");
	function handleChange(event) {
		setFormData(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		addResturant(formData);
		setFormData("");
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={formData}
					/>
					<input type="submit" value="Add Restaurant" />
				</label>
			</form>
		</div>
	);
}

export default RestaurantInput;
