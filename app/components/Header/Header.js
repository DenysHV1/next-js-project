import Link from "next/link.js";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={` container ${s.headerInner}`}>
        <Link href="/" className={s.logo}>DenVik</Link>
        <nav className={s.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
