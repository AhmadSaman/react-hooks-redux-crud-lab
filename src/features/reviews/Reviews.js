import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
	console.log(reviews);
	return (
		<ul>
			{reviews.map((r) => (
				<Review key={r.id} review={r} />
			))}
		</ul>
	);
}

export default Reviews;
