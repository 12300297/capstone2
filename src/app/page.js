import Link from "next/link";
import "./styles.css";

export default function Home() {
  return (
    <div className="home flex flex-align-start">
      <div className="home__left">
        <div className="home__left__subTitle weight-600">
          HIGHLY PROFESSIONAL CLEANING
        </div>
        <div className="home__left__title weight-700 m-t-10">
          EASY TO CLEAN{" "}
          <span className="home__left__title--normalColor">
            HOUSE AND OFFICE{" "}
          </span>
        </div>
        <div className="home__left__slogan m-t-15">
          We need to make a good impression on yours customers from the moment
          they walk through yours doors. We can help you to do that.
        </div>
        <Link href="" className="home__left__btn m-t-15 weight-600 font-size-15">
          Get a quote
        </Link>
      </div>
      <div className="home__right">
        <img src="./images/home-cover.png" alt="home" />
      </div>
    </div>
  );
}
