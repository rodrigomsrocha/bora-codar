import { useEffect, useState } from "react";
import { Player } from "./components/Player";
import { Layout } from "./layout";
import { api } from "./services/api";

export function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const skipSong = (forwards: boolean) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };

  useEffect(() => {
    async function populateSongs() {
      const { data } = await api.get("/");
      console.log(data);
      setSongs(data);
    }
    populateSongs();
  }, []);

  return (
    <Layout>
      <Player
        songs={songs}
        currentSongIndex={currentSongIndex}
        skipSong={skipSong}
      />
    </Layout>
  );
}
