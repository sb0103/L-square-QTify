import NavBar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Albums from "./components/Albums/Albums.jsx";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [albums, setAlbums] = useState([[], []]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response1 = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/top`
        );

        setAlbums([response1.data]);
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
      <Albums
        title={"Top Albums"}
        cards={albums[0].map((album) => {
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
