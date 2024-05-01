import "./styles.css";

export default function Careers() {
  return (
    <div className="careers">
      <div className="careers__cover">
        <img src="./images/careers-cover.png" alt="careers" />
      </div>

      <div className="careers__intro font-size-15">
        Our company is always looking for new talent to join our team. We are
        looking for people who are passionate about cleaning and who are
        dedicated to providing the best service possible to our customers. If
        you are interested in joining our team then please send us your resume
        and we will get back to you as soon as possible.
      </div>

      <div className="careers__form flex flex-align-start m-t-10">
        <img
          src="./images/career-1.png"
          alt=""
          className="careers__form__img"
        />

        <form className="careers__form__info flex flex-column">
          <label for="fname">First Name</label>
          <input type="text" placeholder="First Name" id="fname" />
          <label for="lname">Last Name</label>
          <input type="text" placeholder="Last Name" id="nlame" />
          <label for="state">State </label>
          <input type="text" placeholder="state" id="State" />
          <label for="code">Post Code </label>
          <input type="text" placeholder="Post code" id="code" />
          <label for="phone">Phone</label>
          <input type="text" placeholder="Phone" id="phone" />
          <label for="email">Email</label>
          <input type="text" placeholder="Email" id="email" />

          <div className="careers__form__info__q1">
            <label>Do you have any previous cleaning experience? </label>

            <div className="flex flex-align-center flex-justify-center">
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="none" value="None" />
                <label className="m-l-5">None</label>
              </div>

              <div className="flex flex-align-center m-r-10">
                <input type="radio" id="yes" name="yes" />
                <label className="m-l-5">
                  I have workied as a cleaner before
                </label>
              </div>
            </div>
          </div>
          <div className="careers__form__info__q2">
            <label>How long have you worked as a cleaner?</label>

            <div className="flex flex-align-center flex-justify-center">
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="experience" />
                <label className="m-l-5">1-6 months</label>
              </div>
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="experience" value="6-12 months" />
                <label className="m-l-5">6-12 months</label>
              </div>
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="experience" value="1-2 years" />
                <label className="m-l-5">1-2 years</label>
              </div>
            </div>
          </div>
          <div className="careers__form__info__q3">
            <label for="email">
              What type of the cleaning experience?[You can choose more than
              one]
            </label>

            <div className="flex flex-align-center flex-justify-center">
              <div className="flex flex-align-center m-r-10">
                <input
                  type="radio"
                  id="yes"
                  name="experience"
                  value="1-6 months"
                />
                <label className="m-l-5">1-6 months</label>
              </div>

              <div className="flex flex-align-center m-r-10">
                <input
                  type="radio"
                  id="yes"
                  name="experience"
                  value="6-12 months"
                />
                <label className="m-l-5">6-12 months</label>
              </div>

              <div className="flex flex-align-center m-r-10">
                <input
                  type="radio"
                  id="yes"
                  name="experience"
                  value="1-2 years"
                />
                <label className="m-l-5">1-2 years</label>
              </div>
            </div>
          </div>
          <div className="careers__form__info__q4">
            <label for="email">
              What employment status are you seeking?[You can choose more than
              one]
            </label>

            <div className="flex flex-align-center flex-justify-center">
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="experience" value="Yes" />
                <label>Yes</label>
              </div>
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="experience" value="No" />
                <label>No</label>
              </div>
            </div>
          </div>
          <div className="careers__form__info__q5">
            <label for="email">Do you have your own car?</label>

            <div className="flex flex-align-center flex-justify-center">
              <div className="flex flex-align-center  m-r-10">
                <input type="radio" name="experience" value="Yes" />
                <label className="m-l-5">Yes</label>
              </div>
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="experience" value="No" />
                <label className="m-l-5">No</label>
              </div>
            </div>
          </div>
          <div className="careers__form__info__q6">
            <label for="email">
              Do you have a recent National Police Record Check Certificate?
            </label>

            <div className="flex flex-align-center flex-justify-center">
              <div className="flex flex-align-center  m-r-10">
                <input type="radio" name="experience" value="Yes" />
                <label className="m-l-5">Yes</label>
              </div>
              <div className="flex flex-align-center m-r-10">
                <input type="radio" name="experience" value="No" />
                <label className="m-l-5">No</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
