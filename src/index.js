import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onsetRating={setMovieRating} />
      <p>This Movie was Rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />

    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
