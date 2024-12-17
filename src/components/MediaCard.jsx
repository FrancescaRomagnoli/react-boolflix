import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

export default function MediaCard({ media }) {
  //  converting language into flag
  const originalLanguage = media.original_language;

  const languageFlag = `https://flagsapi.com/${originalLanguage}/flat/24.png`;

  const [flagError, setFlagError] = useState(false);

  const handleFlagError = () => {
    setFlagError(true);
  };

  // poster path construction
  const posterImgPath = media.poster_path;
  const posterImg = `https://image.tmdb.org/t/p/w342/${posterImgPath}`;

  const [posterImgError, setPosterImgError] = useState(false);

  const handlePosterImgError = () => {
    setPosterImgError(true);
  };

  // converting vote into star icons
  const voteAverage = media.vote_average;
  const maxStarsNum = 5;

  const fullStarsNum = Math.ceil(voteAverage / 2);
  const emptyStarsNum = maxStarsNum - fullStarsNum;

  const emptyStars = [...Array(emptyStarsNum)].map((star, index) => {
    return <FontAwesomeIcon icon={faStar} key={index} />;
  });

  const fullStars = [...Array(fullStarsNum)].map((star, index) => {
    return <FontAwesomeIcon icon={faStarSolid} key={index} />;
  });

  return (
    <>
      <div className="card">
        <div className="card-poster">
          {posterImgError ? (
            <img src="https://placehold.co/300x500"></img>
          ) : (
            <img src={posterImg} onError={handlePosterImgError}></img>
          )}
        </div>
        <div className="card-overlay">
          <div className="card-overlay card-body">
            <ul>
              <li>
                <h2 className="card-title">{media.name || media.title}</h2>
              </li>
              <li className="text-muted text-small">
                {media.original_name || media.original_title}
              </li>
              <li className="text-muted text-small">
                {flagError ? (
                  <span>{originalLanguage}</span>
                ) : (
                  <img
                    src={languageFlag}
                    alt={originalLanguage}
                    onError={handleFlagError}
                  />
                )}
              </li>
              <li className="rating">
                <span>{fullStars}</span>
                <span>{emptyStars}</span>
              </li>
              <li className="text-muted text-small">
                {media.overview ? media.overview : "tba"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
