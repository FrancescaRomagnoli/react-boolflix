import { useMediaContext } from "../contexts/GlobalContext";
import Section from "./Section";

export default function Main() {
  const { resultMovies, resultShows } = useMediaContext();

  return (
    <>
      <main>
        <Section mediaList={resultMovies} sectionTitle={"Movies"} />
        <Section mediaList={resultShows} sectionTitle={"TV Shows"} />
      </main>
    </>
  );
}
