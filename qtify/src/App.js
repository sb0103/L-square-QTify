import NavBar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Albums from "./components/Albums/Albums.jsx";
import CarouselWithFilter from "./components/CarouselWithFilter/CarouselWithFilter.jsx";

import { useEffect, useState } from "react";
import axios from "axios";
import FAQ from "./components/FAQ/FAQ.jsx";

export const backendURL = `https://qtify-backend-labs.crio.do`;

function App() {
  let [albums, setAlbums] = useState([[], []]);
  let [songs, setSongs] = useState([]);
  let [genres, setGenres] = useState([]);
  let [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response1 = await axios.get(`${backendURL}/albums/top`);
        let response2 = await axios.get(`${backendURL}/albums/new`);
        let response3 = await axios.get(`${backendURL}/genres`);

        setAlbums([response1.data, response2.data]);
        setGenres([{ key: "all", label: "All" }, ...response3.data.data]);

        let songsRes = await axios.get(`${backendURL}/songs`);
        setSongs(songsRes.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredSongs(songs);
  }, [songs]);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Albums
        title={"Top Albums"}
        cards={albums[0].map((album) => {
          return {
            songsCount: album.songs.length,
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
            songsCount: album.songs.length,
            label: album.title,
            imgSrc: album.image,
            stats: `${album.follows} Follows`,
            id: album.id,
          };
        })}
      />
      <CarouselWithFilter
        title={"Songs"}
        allCards={filteredSongs.map((song) => {
          return {
            label: song.title,
            imgSrc: song.image,
            stats: `${song.likes} likes`,
            id: song.id,
            genre: song.genre,
          };
        })}
        filters={genres}
        filterFn={(genre) => {
          if (genre === "all") {
            setFilteredSongs(songs);
            return;
          }
          let fs = songs.filter((val) => val.genre.key === genre);
          console.log(fs.length);
          setFilteredSongs(fs);
        }}
      />
      <FAQ />
    </div>
  );
}

export default App;
