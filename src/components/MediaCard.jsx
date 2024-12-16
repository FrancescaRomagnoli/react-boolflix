import { useState } from "react";

export default function MediaCard({ media }) {
  const originalLanguage = media.original_language;

  const languageFlag = `https://flagsapi.com/${originalLanguage}/flat/24.png`;

  const [flagError, setFlagError] = useState(false);

  const handleFlagError = () => {
    setFlagError(true);
  };

  // poster path construction
  const posterImgPath = media.poster_path;
  const posterImg = `https://image.tmdb.org/t/p/w342/${posterImgPath}`;

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
        <li>{media.vote_average}</li>
      </ul>
    </>
  );
}
