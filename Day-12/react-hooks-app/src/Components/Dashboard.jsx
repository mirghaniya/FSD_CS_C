import React, { useState } from 'react'
function Dashboard() {
  const [data, setData] = useState("");
  function fetchData() {
    fetch("https://api.github.com/users/Aatif09").then((response) => {
      return response.json();
    }).then((response) => {
      setData(response)
    })}
  return (
    <div>
      <p>{data.login}</p>
      <img src={data.avatar_url} />
      <button onClick={fetchData}>Click Me</button>
    </div>
  )}
export default Dashboard