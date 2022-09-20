import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./style/style.css";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const fetchData = await response.json();
      console.log(fetchData);

      setData(fetchData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  const { company, title, dates, duties } = data[index];

  return (
    <main className="App">
      <section className="experience">
        <h1 className="experience__heading">Experience</h1>
      </section>
      <section className="experience__container">
        <article className="btn__container">
          {data.map((ele) => {
            return (
              <button className="btn btn__company" key={ele.id}>
                {ele.company}
              </button>
            );
          })}
        </article>
        <article className="experience__content">
          <h2 className="experience__title">{title}</h2>
          <h3 className="experience__company">{company}</h3>
          <p className="experience__dates">{dates}</p>
          {duties.map((ele, index) => {
            return (
              <article key={index}>
                <FaAngleDoubleRight /> <p className="experience__text">{ele}</p>
              </article>
            );
          })}
        </article>
      </section>
    </main>
  );
}

export default App;
