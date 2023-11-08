import "./card.css";

export default function Card({ imgSrc, stats, label }) {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={imgSrc} alt="" />
        <div className="card-rect">
          <div className="card-stats-btn">{stats}</div>
        </div>
      </div>
      <div className="card-title">{label}</div>
    </div>
  );
}
