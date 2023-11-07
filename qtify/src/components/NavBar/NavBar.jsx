import "./navbar.css";
import { IconSearch } from "../Icons";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <span className="logo">
          <img src="qtifyIcon.png" width="67" weight="34" alt="" />
        </span>
        <div className="search-bar">
          <input
            className="search-input"
            style={{ flex: 1 }}
            placeholder="Select an Album of your choice"
          />
          <span className="search-btn">
            {" "}
            <IconSearch style={{ width: "20", height: "20" }} />{" "}
          </span>
        </div>

        <button className="feedback-btn">Give FeedBack</button>
      </div>
    </>
  );
}
