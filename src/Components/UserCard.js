import React from "react";

function User() {
  return (
    <div className="card-container">
      <span className="pro">ONLINE</span>
      <img src="images/1.jpg" alt="user" />
      <h3>User Full Name</h3>
      <h3>Colombo</h3>
      <p>Front-end Developer</p>
      <div>
        <button>Message</button>
        <button>Following</button>
      </div>
      <div>
        <h6>Skills</h6>
        <ul>
          <li>Html</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
export const UserCard = () => {
  return (
    <div>
      <User />
    </div>
  );
};
