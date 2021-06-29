import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";

import StyledCard from "components/StyledCard";
import SideCardTemplate from "components/SideCardTemplate";
import { getAllPosts } from "service/posts";
import { keyGenerator } from "utils/commonUtils";

const Recommendation = () => {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  const Recomentdations = () => {
    const activeRecomendation = allPosts.slice(-2);
    const JSX = [];
    for (let i = activeRecomendation.length - 1; i >= 0; i--) {
      const item = activeRecomendation[i];
      JSX.push(
        <StyledCard
          url={`/post/${item.id}`}
          img={item.img}
          title={item.title}
          date={item.date}
          text={item.body}
          notFullHeight
          key={keyGenerator()}
        />
      );
    }
    return JSX;
  };

  useEffect(() => {
    const handleResponse = (res) => {
      const { status } = res;
      if (status !== 200) {
        new Error("Data call is unsuccessful!");
      } else {
        return res.json();
      }
    };

    getAllPosts()
      .then(handleResponse)
      .then((jsonData) => {
        jsonData.forEach((item) => {
          item.img = `/assets/img/dummy${
            Number.parseInt(Math.random() * 6) + 1
          }.jpg`;
          let [, month, day, year] = new Date().toDateString().split(" ");
          item.date = `${day} ${month}, ${year}`;
        });
        setAllPosts(jsonData);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {loading || !allPosts ? (
        <Spinner animation="border" className="mt-4" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div className="recommendation">
          <SideCardTemplate title="YOU MAY ALSO LIKE">
            <Card.Body className="pt-0 mt-2">
              <CardDeck>
                <Recomentdations />
              </CardDeck>
            </Card.Body>
          </SideCardTemplate>
        </div>
      )}
    </>
  );
};

export default Recommendation;
