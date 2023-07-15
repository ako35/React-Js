import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReactRouterDom = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>ReactRouterDom</h1>
      <ul>
        {data.map((item, index) => (
          <Link key={index} to={`/router-params/${item.id}`}>{item.name}</Link>
        ))}
      </ul>
    </div>
  );
};

export default ReactRouterDom;
