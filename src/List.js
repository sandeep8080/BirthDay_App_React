import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((item) => {
        const { id, age, name, image } = item;
        return (
          <article key={id} className="article-container">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
