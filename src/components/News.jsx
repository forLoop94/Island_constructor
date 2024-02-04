import { useState } from "react";
import { newsData } from "../data";
import { Footer } from "./Footer";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const News = () => {
  const [filteredNews, setFilteredNews] = useState(newsData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const filterNews = (cat) => {
    if (cat.toLowerCase() === "all") {
      setFilteredNews(newsData);
    } else {
      const filtered = newsData.filter(
        (news) => news.category.toLowerCase() === cat.toLowerCase()
      );
      setFilteredNews(filtered);
    }

    setSelectedCategory(cat);
  };

  return (
    <section>
      <div>
        <div className="news-list">
          <h1 className="news-header primary-text">Latest News</h1>
          <div className="news-cat-btns-group">
            <button
              className={`news-cat-btns ${
                selectedCategory === "all" ? "selected" : ""
              }`}
              onClick={() => filterNews("all")}
            >
              All
            </button>
            <button
              className={`news-cat-btns ${
                selectedCategory === "company" ? "selected" : ""
              }`}
              onClick={() => filterNews("company")}
            >
              Company
            </button>
            <button
              className={`news-cat-btns ${
                selectedCategory === "social" ? "selected" : ""
              }`}
              onClick={() => filterNews("social")}
            >
              Social
            </button>
            <button
              className={`news-cat-btns ${
                selectedCategory === "projects" ? "selected" : ""
              }`}
              onClick={() => filterNews("projects")}
            >
              Projects
            </button>
          </div>
          <div className="news-grid-container primary-text">
            {filteredNews.map((news) => (
              <div key={news.id} className="news-grid-item">
                <img className="news-image" src={news.image} alt={news.title} />
                <div className="news-text">
                  <p className="news-cat">{news.category}</p>
                  <h4 className="news-title">{news.title.toUpperCase()}</h4>
                  <div className="d-flex
                  justify-content-between">
                    <p className="news-date align-self-center">{news.date}</p>
                    <button className="show-news" onClick={() => navigate(`/news/${news.id}`)}>
                      <BsChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
