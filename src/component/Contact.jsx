import data from "../constants/data.json";

export const Contact = () => {
  return (
    <div className="contact-section" id="contact-section">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-info">
          <img src={data.contact["profile-img"]} alt="profile-img" />
          <p>Yifan Wang</p>
          <p>+46 767652447</p>
          <p>dittoya@outlook.com</p>
        </div>
      </div>
    </div>
  );
};
