import "./styles.css";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__cover">
        <img src="./images/about-cover.png" alt="aboutus" />
      </div>

      <div className="aboutUs__intro font-size-15">
        We are one of the professional cleaning services. We started this
        company because we belive that we can change the way your company
        functions, by effectively cleaning your business for you so can
        concentrate on the more important aspects of your business. We started
        out as Jichy Trading and we have always had very close relationships
        with our customers. We do this by providing some of the best services
        around as well as making sure that we meet every expectation that our
        customers have of us.
      </div>
      <div className="aboutUs__company flex flex-align-start m-t-10">
        <img src="./images/company-cover.png" alt="company" />
        <div className="aboutUs__company__info">
          <div className="aboutUs__company__info__title font-size-18 weight-600">
            Company Mission
          </div>
          <div className="m-t-15">
            We are one of the professional cleaning services. We started this
            company because we belive that we can change the way your company
            functions, by effectively cleaning your business for you so can
          </div>

          <ul className="m-l-30 m-t-15">
            <li>
              We class the success of our customers as our own success. If you
              are happy then we are happy.{" "}
            </li>
            <li>Our cleaning services are fast, efficient and through</li>
            <li>
              We always make sure that we are environmentally friendly and we
              will always do everything we can to protect the environment around
              us.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
