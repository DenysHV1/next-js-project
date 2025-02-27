"use client";

import { useEffect, useState } from "react";
import s from "./Info.module.css";
import Link from "next/link.js";

const Info = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const result = await response.json();

        setData(result);
      } catch (error) {
        setLoader(false);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [setData]);

  return (
    <section className={s.section}>
      <div className="container">
        {loader && <p>Loading ...</p>}
        <ul className={s.infoInner}>
          {data.length > 0 &&
            data.map(({ body, title, id }, idx) => (
              <li key={id} className={s.item}>
                <p className={s.number}>{idx + 1}</p>
                <h2>{title}</h2>
                <p>{body}</p>
                <Link href={`/about/${id}`}>More</Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Info;
