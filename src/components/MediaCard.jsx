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

  // converting vote into star icons
  const voteAverage = media.vote_average;
  const maxStars = 5;

  const fullstars = Math.ceil(voteAverage / 2);
  const emptyStart = maxStars - fullstars;

  return (
    <>
      <ul>
        <li>
          <img src={posterImg} alt="poster" />
        </li>
        <li>{media.name || media.title}</li>
        <li>{media.original_name || media.original_title}</li>
        <li>
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
        <li>
          {media.vote_average}
          <span>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarSolid} />
          </span>
        </li>
      </ul>
    </>
  );
}
