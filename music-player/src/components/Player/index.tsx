import { FastForward, Play, Rewind } from "phosphor-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./index.module.scss";

export function Player() {
  return (
    <div className={styles.player}>
      <header>
        <img
          src="https://m.media-amazon.com/images/I/815LXdw3NwL._AC_SY450_.jpg"
          alt="peace sells album"
        />
      </header>
      <main className={styles.info}>
        <h1>Peace Sells</h1>
        <span>Megadeth</span>
      </main>
      <div className={styles.controls}>
        <button>
          <Rewind color="#E1E1E6" weight="fill" size={24} />
        </button>
        <button>
          <Play color="#E1E1E6" weight="fill" size={24} />
        </button>
        <button>
          <FastForward color="#E1E1E6" weight="fill" size={24} />
        </button>
      </div>
      <div className={styles.progress}>
        <Slider
          railStyle={{ background: "#5e586f", height: "6px" }}
          trackStyle={[{ background: "#c1c0c4", height: "6px" }]}
          handleStyle={[{ visibility: "hidden" }]}
        />
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}
