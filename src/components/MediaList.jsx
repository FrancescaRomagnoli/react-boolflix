import { useMediaContext } from "../contexts/GlobalContext";
import MediaCard from "./MediaCard";

export default function MediaList({ mediaList, mediaType }) {
  return (
    <>
      <div className="card-row">
        {mediaList.length > 0 ? (
          mediaList.map((media) => {
            return (
              <div key={media.id}>
                <MediaCard media={media} />
              </div>
            );
          })
        ) : (
          <p className="text-muted text-small">No {mediaType} found.</p>
        )}
      </div>
    </>
  );
}
