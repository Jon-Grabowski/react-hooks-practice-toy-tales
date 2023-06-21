import React, {useState} from "react";

function ToyCard({ name, image, likes, id }) {
  const [newLike, setNewLike] = useState(likes)
  
  function handleLikeButton () {
    setNewLike(newLike + 1);
    fetch(`http://localhost:4000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "likes": newLike+1
      })
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLike} Likes </p>
      <button className="like-btn" onClick={handleLikeButton}>Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
