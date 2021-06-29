import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

import TitleBar from "views/TitleBar";
import SideBar from "views/SideBar";
import StyledCard from "components/StyledCard";
import SideCardTemplate from "components/SideCardTemplate";
import { getAllPosts, getPostById } from "service/posts";

const PostDetail = () => {
  const [breadcrump] = useState([
    { title: "Home", path: "/home" },
    { title: "Blog", path: "/blog" },
    { title: "" },
  ]);
  const [loading, setLoading] = useState(true);
  const [recomendationLoading, setRecomendationLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const { postId } = useParams();

  const handleResponse = (res) => {
    const { status } = res;
    if (status !== 200) {
      new Error("Data call is unsuccessful!");
    } else {
      return res.json();
    }
  };

  useEffect(() => {
    if (postId && breadcrump[2].title === "") {
      getPostById(postId)
        .then(handleResponse)
        .then((jsonData) => {
          jsonData.img = `/assets/img/dummy${
            Number.parseInt(Math.random() * 6) + 1
          }.jpg`;
          let [, month, day, year] = new Date().toDateString().split(" ");
          jsonData.date = `${day} ${month}, ${year}`;

          breadcrump[2].title = jsonData.title;
          setPostData(jsonData);
          setLoading(false);
        })
        .catch(console.error);
    }
  }, [postId, breadcrump]);

  useEffect(() => {
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
        setRecomendationLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="content">
      <TitleBar title="Blog Detail" breadcrump={breadcrump} />
      <Container className="mt-3">
        <Row>
          <Col lg={9} className="mt-4">
            {loading ||
              (!postData && (
                <Spinner animation="border" className="mt-4" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ))}
            {!loading && postData && (
              <>
                <StyledCard
                  img={postData.img}
                  title={postData.title}
                  date={postData.date}
                  text={postData.body}
                  notFullHeight
                />
                <div className="recommendation">
                  <SideCardTemplate title="YOU MAY ALSO LIKE">
                    <Card.Body className="pt-0 mt-2">
                      <CardDeck>
                        <StyledCard
                          url={`/post/${postData.id}`}
                          img={postData.img}
                          title={postData.title}
                          date={postData.date}
                          text={postData.body}
                          notFullHeight
                        />
                        <StyledCard
                          url={`/post/${postData.id}`}
                          img={postData.img}
                          title={postData.title}
                          date={postData.date}
                          text={postData.body}
                          notFullHeight
                        />
                      </CardDeck>
                    </Card.Body>
                  </SideCardTemplate>
                </div>
              </>
            )}
          </Col>
          <Col lg={3} className="p-0">
            <SideBar className="sidebar mt-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostDetail;
