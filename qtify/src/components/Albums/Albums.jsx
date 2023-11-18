import Grid from "../Grid/Grid";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

export default function Album({ title, cards }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="albums">
      {showAll ? (
        <Grid
          title={title}
          cards={cards}
          toggleView={() => {
            setShowAll((val) => !val);
          }}
        />
      ) : (
        <Carousel
          title={title}
          cards={cards}
          toggleView={() => {
            setShowAll((val) => !val);
          }}
        />
      )}
    </div>
  );
}
