import MediaList from "./MediaList";

export default function Section({ mediaList, sectionTitle }) {
  return (
    <section className="section">
      <h2 className="section-title">{sectionTitle}</h2>
      <div>
        <MediaList mediaList={mediaList} mediaType={sectionTitle}></MediaList>
      </div>
    </section>
  );
}
