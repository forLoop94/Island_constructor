import { Link, useParams } from "react-router-dom";
import { newsData } from "../data";
import { BsEnvelopeAtFill, BsFacebook, BsTwitterX } from "react-icons/bs";
import { Footer } from "./Footer";

export const NewsDetails = () => {
  const { newsId } = useParams();
  const newsDetail = newsData.find(
    (news) => parseFloat(news.id) === parseFloat(newsId)
  );

  return (
    <section>
      <div className="news-list">
        <h1 className="news-title primary-text">News And Happenings</h1>
        <div className="news-body primary-text">
          <div className="d-flex">
            <p className="me-5">{newsDetail.category}</p>
            <p>{newsDetail.date}</p>
          </div>
          <div className="title-icons d-flex justify-content-between">
            <h3 className="sub-title">{newsDetail.title.toUpperCase()}</h3>
            <div className="d-flex gap-3">
              <a href="#">
                <BsFacebook className="news-social-icons" />
              </a>
              <a href="#">
                <BsTwitterX className="news-social-icons" />
              </a>
              <a href="#">
                <BsEnvelopeAtFill className="news-social-icons" />
              </a>
            </div>
          </div>
          <div className="mb-4">
            <img
              className="w-100 details-image"
              src={newsDetail.image}
              alt={newsDetail.title}
            />
            <small className="courtesy">{newsDetail.courtesy}</small>
          </div>
          <div className="grey-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore pariatur, laboriosam ab assumenda saepe eos dolore
              beatae molestiae quod? Illo iure aliquam qui, reprehenderit quam
              facere voluptatibus assumenda numquam placeat enim nihil quod
              magni provident id. Repellendus saepe possimus a, ipsa similique
              ut minus. Eius!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              tempora voluptatem et hic labore temporibus pariatur quibusdam ex
              ipsa iure cupiditate minima, voluptatum ab! Laborum est sit illum
              molestias qui.
            </p>
          </div>
        </div>
        <div className="back-to-news d-flex justify-content-center">
          <Link to="/news">Back to new releases</Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};
