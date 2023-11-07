import "./card.css";

export default function Card() {
  return (
    <>
      <div className="card">
        <img className="card-img" src="cardImg.png" alt="" />
        <div className="card-stats-btn">100 follow</div>
      </div>
      <div className="card-title">New English Songs</div>
    </>
  );
}
