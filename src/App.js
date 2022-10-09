import React, { useEffect, useState } from "react";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData);
  }, [login]);
  if (data) {
    return `<pre>${JSON.stringify(data)}</pre>`;
  }
  return null;
}

export default function App() {
  return <GitHubUser login="apple" />;
}
