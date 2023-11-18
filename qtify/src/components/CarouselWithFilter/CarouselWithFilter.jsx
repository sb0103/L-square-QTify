import { useRef, useState, useEffect } from "react";
import Card from "../Card/Card";
import { IconCarouselLeft, IconCarouselRight } from "../Icons/Icons";
import { backendURL } from "../../App";

import "./carousel-with-filter.css";
import axios from "axios";

export default function CarouselWithFilter({ title, allCards }) {
  const carousel = useRef(null);
  const [pages, setPages] = useState({ current: 1, max: 1 });
  const [cards, setCards] = useState([]);
  const [genres, setGenres] = useState({ all: [], selected: "all" });

  async function getAllFilterKey() {
    try {
      let response = await axios.get(`${backendURL}/genres`);
      setGenres({ all: response.data.data, selected: "all" });
    } catch (err) {
      console.log(err);
    }
  }

  function filterSongs(genre) {
    setGenres((val) => {
      return {
        ...val,
        selected: genre,
      };
    });

    setCards(() => {
      if (genre === "all") {
        return allCards;
      }

      return allCards.filter((card) => {
        if (card.genre.key === genre) {
          return true;
        } else {
          return false;
        }
      });
    });
  }

  function isSelected(genre) {
    if (genre === genres.selected) {
      return `selected-filter`;
    } else {
      return "";
    }
  }

  useEffect(() => {
    getAllFilterKey();
  }, []);

  useEffect(() => {
    setCards(allCards);
  }, [allCards]);

  useEffect(() => {
    let p = Math.ceil(cards / 7) + 1;
    setPages({ current: 1, max: p });
  }, [cards]);

  return (
    <>
      <div className="carousel-container">
        <div className="title-bar">
          <span className="title">{title}</span>
        </div>
        <div className="filter-bar">
          <div
            key={"all"}
            className={`filter-category ${isSelected("all")}`}
            onClick={() => {
              filterSongs("all");
            }}
          >
            All
          </div>
          {genres.all.map((genre) => {
            return (
              <div
                key={genre.key}
                className={`filter-category ${isSelected(genre.key)}`}
                onClick={() => {
                  filterSongs(genre.key);
                }}
              >
                {genre.label}
              </div>
            );
          })}
        </div>

        <div className="carousel" ref={carousel}>
          {" "}
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                imgSrc={card.imgSrc}
                stats={card.stats}
                label={card.label}
              />
            );
          })}
        </div>
        <div
          className="carousel-btn-left"
          onClick={() => {
            carousel.current.scrollTo({
              left: pages.current - 2 * (159 * 7 + 20 * 6),
              behavior: "smooth",
            });
            setPages((p) => {
              return { ...p, current: p.current - 1 };
            });
          }}
        >
          <IconCarouselLeft />
        </div>
        <div
          className="carousel-btn-right"
          onClick={() => {
            carousel.current.scrollTo({
              left: pages.current * (159 * 7 + 20 * 6),
              behavior: "smooth",
            });
            setPages((p) => {
              return { ...p, current: p.current + 1 };
            });
          }}
        >
          <IconCarouselRight />
        </div>
      </div>
    </>
  );
}
