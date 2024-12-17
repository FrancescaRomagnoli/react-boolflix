import { useMediaContext } from "../contexts/GlobalContext";
import MediaCard from "./MediaCard";

export default function MediaList({ mediaList }) {
  return (
    <>
      <div className="card-row">
        {mediaList.map((media) => {
          return (
            <div key={media.id}>
              <MediaCard media={media} />
            </div>
          );
        })}
      </div>
    </>
  );
}
