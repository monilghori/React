import { useEffect, useState } from "react";
import axios from 'axios';
export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  console.log("Component rendered!!" + count);
  useEffect(() => {
    console.log("useEffect is Called!!" + count);
    if (count == 0) setCount(count + 1);

    const fetchData = () => {
      // fetch("https://jsonplaceholder.typicode.com/todos/1")
      //   .then((res) => setData(res.json))
      //   .catch((err) => console.log(err));

      axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=> {setData(response.data)})
        .catch((error)=>{console.log(error)});

      console.log(data);
    };

    if (data == null) fetchData();
    console.log(data);

    return () => {
      console.log("useEffect cleanup is called!!" + count);
    };
  }, []);
  return (
    <div>
      MyComponent {count}
      <br></br>
      <div>{data ? (<div><li>id : {data.id}</li><li>title : {data.title}</li></div>) : <div>data not fetch</div>}</div>
    </div>
  );
}
