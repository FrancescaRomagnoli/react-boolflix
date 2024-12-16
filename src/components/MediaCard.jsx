export default function MediaCard({ media }) {
  return (
    <>
      <ul>
        <li>{media.name || media.title}</li>
        <li>{media.original_name || media.original_title}</li>
        <li>{media.original_language}</li>
        <li>{media.vote_average}</li>
      </ul>
    </>
  );
}
