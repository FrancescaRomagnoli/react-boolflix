import MediaList from "./MediaList";

export default function Section({ mediaList, sectionTitle }) {
  return (
    <section className="container section">
      <h2 className="section-title">{sectionTitle}</h2>
      <div>
        <MediaList mediaList={mediaList}></MediaList>
      </div>
    </section>
  );
}
