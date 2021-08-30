import React from "react";
import Resturant from "./Restaurant";
function Restaurants({ state }) {
	console.log();
	return (
		<ul>
			{state.restaurants.entities.map((resturant) => (
				<Resturant key={resturant.id} restaurant={resturant} />
			))}
		</ul>
	);
}

export default Restaurants;
