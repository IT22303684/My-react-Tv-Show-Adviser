import { useEffect, useState } from "react";
import { TvShowAPI } from "./Api/tv-show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./Components/TvshowDetails/TVShowDetail";
import Logo from "./Components/Logo/Logo";
import logoImg from "./assets/Images/logo.png";
import TVShowListItem from "./Components/TVShowListItem/TVShowListItem";
import Tvshowlist from "./TvShowList/Tvshowlist";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setcurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const populertvShowList = await TvShowAPI.fetchPopulars();
      if (populertvShowList.length > 0) {
        setcurrentTvShow(populertvShowList[0]);
      }
    } catch (e) {
      alert("Erro fetching popular tv shows");
    }
  }

  async function fetchRecommendation(tvShowId) {
    try {
      const recommendedtvShowList = await TvShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendedtvShowList.length > 0) {
        setRecommendationList(recommendedtvShowList.slice(0, 10));
      }
    } catch (e) {
      alert("Error fetching recommended tv shows");
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TvShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setcurrentTvShow(searchResponse[0]);
      }
    } catch (e) {
      alert("Error fetching tv shows by title");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendation(currentTVShow.id);
    }
  }, [currentTVShow]);

  function updateCurrentTvShow(tvShow) {
    setcurrentTvShow(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center center/cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title={"TVShows"}
              subtitle={"find a show you may like"}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_show}>
        {currentTVShow && (
          <Tvshowlist
            onClickItem={updateCurrentTvShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
