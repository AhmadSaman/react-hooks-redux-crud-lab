import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	function addResturant(name) {
		dispatch(restaurantAdded(name));
	}

	return (
		<div>
			<RestaurantInput addResturant={addResturant} />
			<Restaurants state={state} />
		</div>
	);
}

export default RestaurantsContainer;
