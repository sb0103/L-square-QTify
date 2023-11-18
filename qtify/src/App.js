import NavBar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Albums from "./components/Albums/Albums.jsx";

import { useEffect, useState } from "react";
import axios from "axios";

const backendURL = `https://qtify-backend-labs.crio.do`;

function App() {
  let [albums, setAlbums] = useState([[], []]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response1 = await axios.get(`${backendURL}/albums/top`);

        let response2 = await axios.get(`${backendURL}/albums/new`);

        setAlbums([response1.data, response2.data]);
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
      <Albums
        title={"New Albums"}
        cards={albums[1].map((album) => {
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
