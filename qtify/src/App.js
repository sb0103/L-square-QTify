import NavBar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Grid from "./components/Grid/Grid.jsx";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [grids, setGrids] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/top`
        );
        setGrids(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Grid
        title={"Top Albums"}
        cards={grids.map((album) => {
          return {
            label: album.title,
            imgSrc: album.image,
            stats: `${album.follows} Follows`,
            id: album.id,
          };
        })}
      />
    </div>
  );
}

export default App;
