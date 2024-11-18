import React from "react";
import s from "./style.module.css";
import TVShowListItem from "../Components/TVShowListItem/TVShowListItem";

function Tvshowlist({ tvShowList, onClickItem }) {
  return (
    <div className={s.root}>
      <div className={s.title}>You'll probably like these shows :</div>
      <div className={s.list}>
        {tvShowList.map((tvshow) => {
          return (
            <span className={s.tv_show_item} key={tvshow.id}>
              <TVShowListItem tvShow={tvshow} onclick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Tvshowlist;
