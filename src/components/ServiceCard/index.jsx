import "./styles.css";

export default function ServiceCard() {
  return (
    <div className="serviceCard">
      <div className="serviceCard__cover">
        <img
          src="https://i.pinimg.com/736x/03/2c/97/032c97d06207e9a18bd625de28050744.jpg"
          alt="service card"
        />
      </div>
      <div className="serviceCard__title weight-700 m-t-10">Cardname</div>
      <div className="serviceCard__subTitle m-t-15">
        We need to make a good impression on yours customers from the moment
        they walk through yours doors. We can help you to do that.
      </div>
    </div>
  );
}
