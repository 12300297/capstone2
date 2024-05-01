import Link from "next/link";
import "./styles.css";

export default function Header() {
  return (
    <header className="header  ">
      <div className="headerBox flex flex-align-center flex-justify-between  ">
        <Link href="/" className="font-size-30">
          nnBusiness
        </Link>
        <div className="header__nav flex flex-align-center">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/aboutus">Blog</Link>
          <Link href="/contactus">Contact</Link>
          <Link href="/careers">Careers</Link>
          <Link
            href="/"
            className="header__nav__btn flex flex-align-center flex-justify-between font-size-14 weight-600 "
          >
            <img
              src="./images/calendar.svg"
              alt="calendar"
              className="m-r-10"
            />

            <div className="">Get Quote</div>
          </Link>
        </div>
        <div></div>
      </div>
    </header>
  );
}
