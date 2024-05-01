import ServiceCard from "@/components/ServiceCard";
import "./styles.css";

export default function Services() {
  return (
    <div className="services">
      <div className="services__cover ">
        <img src="./images/services-cover.png" alt="" />
      </div>
      <div className="services__intro text-align-center font-size-15">
        We are one of the professional cleaning services. We started this
        company because we belive that we can change the way your company
        functions, by effectively cleaning your business for you so can
        concentrate on the more important aspects of your business.
      </div>

      <div className="services__list flex flex-wrap">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
