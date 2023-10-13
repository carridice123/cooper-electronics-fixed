import "../styles/bootstapmobilenav.css";
import Link from "next/link";
const Mobileboot = () => {
  return (
    <section className="top-nav">
      <div>
        <Link href="/">Home</Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link href="/rental">Cars on rental</Link>
        </li>
        <li>
          <Link href="/electronics">Electronics</Link>
        </li>
        <li>
          <Link href="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link href="/contruction">Construction</Link>
        </li>
      </ul>
    </section>
  );
};

export default Mobileboot;
