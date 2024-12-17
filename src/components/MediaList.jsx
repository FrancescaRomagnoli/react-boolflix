import { useMediaContext } from "../contexts/GlobalContext";
import MediaCard from "./MediaCard";

export default function MediaList({ children, mediaList }) {
  return (
    <>
      {children}
      {mediaList.length > 0 ? (
        mediaList.map((media) => {
          return (
            <div key={media.id}>
              <MediaCard media={media} />
            </div>
          );
        })
      ) : (
        <>
          <div>Search something</div>
        </>
      )}
    </>
  );
}
