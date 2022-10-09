import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData);
  }, [login]);
  if (data) {
    return `<div>${JSON.stringify(data, null, 2)}</div>`;
  }
  return null;
}

ReactDOM.render(<GitHubUser login="apple" />, document.getElementById("root"));
