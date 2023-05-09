import React from "react";
import "./IdCard.css";

/* 6 props for IdCard

lastName: A string
firstName: A string
gender: A string, 'male' or 'female'
height: A number
birth: A date
picture: A string*/

export const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) => {
  console.log(birth);
  return (
    <div className="eachcard">
      <img className="cardImg" src={picture} alt="profile picture"></img>
      <div className="cardText">
        <p>
          <strong>First name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
