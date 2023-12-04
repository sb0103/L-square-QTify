import { useRef, useState, useEffect } from "react";
import Card from "../Card/Card";
import { IconCarouselLeft, IconCarouselRight } from "../Icons/Icons";
import "./carousel-with-filter.css";

export default function CarouselWithFilter({
  title,
  allCards,
  filters,
  filterFn,
}) {
  const carousel = useRef(null);
  const [pages, setPages] = useState({ current: 1, max: 1 });
  const [cards, setCards] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  function isSelected(genre) {
    if (genre === selectedFilter) {
      return `selected-filter`;
    } else {
      return "";
    }
  }

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
          {filters.map((filter) => {
            return (
              <div
                key={filter.key}
                className={`filter-category ${isSelected(filter.key)}`}
                onClick={() => {
                  filterFn(filter.key);
                  setSelectedFilter(filter.key);
                }}
              >
                {filter.label}
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
              left: (pages.current - 2) * (159 * 7 + 20 * 6),
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
