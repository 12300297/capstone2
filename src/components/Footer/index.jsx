import Link from "next/link";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top flex flex-align-start flex-justify-between">
        <div className="footer__top__left ">
          <div className="footer__top__left__logo">MN Business</div>
          <div className="footer__top__left__slogan m-t-30">
            We need to make a good impression on yours customers from the moment
            they walk through yours doors. We can help you to do that.
          </div>
          <div className="footer__top__left__socials flex flex-align-center m-t-10">
            <Link
              href=""
              className="flex flex-align-center flex-justify-center m-r-10"
            >
              <img src="./images/fb.svg" alt="" />
            </Link>
            <Link
              href=""
              className="flex flex-align-center flex-justify-center m-r-10"
            >
              <img src="./images/twitter.svg" alt="" />
            </Link>
            <Link
              href=""
              className="flex flex-align-center flex-justify-center m-r-10"
            >
              <img src="./images/linkedin.svg" alt="" />
            </Link>
            <Link
              href=""
              className="flex flex-align-center flex-justify-center"
            >
              <img src="./images/insta.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="footer__top__right flex flex-justify-end">
          <div className="footer__top__right__service flex flex-column m-r-50">
            <div className="footer__top__right__service__title weight-600">
              Services
            </div>
            <Link href={""}>House Cleaning</Link>
            <Link href={""}>Office Cleaning</Link>
            <Link href={""}>Window Cleaning</Link>
            <Link href={""}>Floor Cleaning</Link>
          </div>
          <div className="footer__top__right__service flex flex-column m-r-50">
            <div className="footer__top__right__service__title weight-600">
              Useful links
            </div>
            <Link href={""}>Home page </Link>
            <Link href={""}>Service page</Link>
            <Link href={""}>FAQ's page </Link>
            <Link href={""}>Contact us </Link>
          </div>

          <div className="footer__top__right__service  footer__top__right__service__contact flex flex-column m-r-50">
            <div className="footer__top__right__service__title weight-600">
              Contact
            </div>
            <div className="flex flex-align-center footer__top__right__service__contact__item">
              <img src="./images/phone.svg" alt="" />
              <div>(+84) 123456789</div>
            </div>
            <div className="flex flex-align-center footer__top__right__service__contact__item">
              <img src="./images/mail.svg" alt="" />
              <div>info@gmail.com</div>
            </div>
            <div className="flex flex-align-center  footer__top__right__service__contact__item">
              <img src="./images/location.svg" alt="" />
              <div>1 Hang than</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom flex flex-align-center flex-justify-center">
        <div className="footer__bottom__line"></div>
        <div className="footer__bottom__text">
          Copyright by MN Business @ 2023. All right reserved
        </div>
        <div className="footer__bottom__line"></div>
      </div>
    </div>
  );
}
