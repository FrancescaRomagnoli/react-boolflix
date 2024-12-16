import { useState } from "react";

export default function MediaCard({ media }) {
  const originalLanguage = media.original_language;

  const languageFlag = `https://flagsapi.com/${originalLanguage}/flat/24.png`;

  const [flagError, setFlagError] = useState(false);

  const handleFlagError = () => {
    setFlagError(true);
  };

  return (
    <>
      <ul>
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
