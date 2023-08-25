import Nav from "../components/Nav";
import "./MyStyles/Contact.css";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="outerContactsContainer">
        <div className="centerDiv">
          <div className="contactInfoContainer">
            <div className="contactInfo">
              <h2 className="contactTitle">Contact Information</h2>
              <div className="contactDetail">
                <div className="contactLabel">Email:</div>
                <div className="contactValue">romerof0005@gmail.com</div>
              </div>
              <div className="contactDetail">
                <div className="contactLabel">Phone:</div>
                <div className="contactValue">305-342-5579</div>
              </div>
              <div className="gitHub">
                <div className="contactLabel">GitHub:</div>
                <div className="contactValue">
                  <a
                    className="gitHubLink"
                    href="https://github.com/Ferom72?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Ferom72?tab=repositories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
