import drums from "./static/audio/Bluebird.mp3";
import synth1 from "./static/audio/70s Choral Riff Layers.mp3";
import synth2 from "./static/audio/80s Pop Synthesizer 01.mp3";
import guitar from "./static/audio/Longing Guitar.mp3";
import guitar2 from "./static/audio/Echo Loop Guitar.mp3";
import piano from "./static/audio/Cali Vibes Piano.mp3";
import sax from "./static/audio/Night Walk Sax.mp3";
import guitar3 from "./static/audio/Rolling Disco Guitar.mp3";
import maracas from "./static/audio/Big Maracas 05.mp3";
import tambourine from "./static/audio/Tambourine 01.mp3";
import fireplace from "./static/audio/Fireplace All.mp3";
import brooklyn from "./static/audio/Brooklyn Style Vibes 02.mp3";
import bass1 from "./static/audio/Edgy Rock Bass 07.mp3";
import bass2 from "./static/audio/Drop the Funk Bass 01.mp3";
import synth3 from "./static/audio/Aquamarine Synth.mp3";
import synth4 from "./static/audio/80s Classic Lead Synth.mp3";
import { Howl } from "howler";

const drumsSound = new Howl({
  src: [drums],
  name: "Python",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  autoUnlock: true,
  onplayerror: function () {
    drumsSound.once("unlock", function () {
      drumsSound.play();
    });
  },
  onloaderror: function (error) {
    console.log(error);
  },
});
drumsSound["name"] = "Python";
const synth1Sound = new Howl({
  src: [synth1],
  name: "JavaScript",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    synth1Sound.once("unlock", function () {
      synth1Sound.play();
    });
  },
});
synth1Sound["name"] = "JavaScript";
const synth2Sound = new Howl({
  src: [synth2],
  name: "Django",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    synth2Sound.once("unlock", function () {
      synth2Sound.play();
    });
  },
});
synth2Sound["name"] = "Django";
const guitarSound = new Howl({
  src: [guitar],
  name: "React",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    guitarSound.once("unlock", function () {
      guitarSound.play();
    });
  },
});
guitarSound["name"] = "React";
const guitar2Sound = new Howl({
  src: [guitar2],
  name: "Redux",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    guitar2Sound.once("unlock", function () {
      guitar2Sound.play();
    });
  },
});
guitar2Sound["name"] = "Redux";
const pianoSound = new Howl({
  src: [piano],
  name: "Node.js",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    pianoSound.once("unlock", function () {
      pianoSound.play();
    });
  },
});
pianoSound["name"] = "Node.js";
const saxSound = new Howl({
  src: [sax],
  name: "Express.js",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    saxSound.once("unlock", function () {
      saxSound.play();
    });
  },
});
saxSound["name"] = "Express.js";
const guitar3Sound = new Howl({
  src: [guitar3],
  name: "SQL",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    guitar2Sound.once("unlock", function () {
      guitar2Sound.play();
    });
  },
});
guitar3Sound["name"] = "SQL";
const maracasSound = new Howl({
  src: [maracas],
  name: "NoSql",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    maracasSound.once("unlock", function () {
      maracasSound.play();
    });
  },
});
maracasSound["name"] = "NoSql";
const tambourineSound = new Howl({
  src: [tambourine],
  name: "Postgresql",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    tambourineSound.once("unlock", function () {
      tambourineSound.play();
    });
  },
});
tambourineSound["name"] = "Postgresql";
const fireplaceSound = new Howl({
  src: [fireplace],
  name: "MongoDB",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    fireplaceSound.once("unlock", function () {
      fireplaceSound.play();
    });
  },
});
fireplaceSound["name"] = "MongoDB";
const brooklynSound = new Howl({
  src: [brooklyn],
  name: "Bootstrap",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    brooklynSound.once("unlock", function () {
      brooklynSound.play();
    });
  },
});
brooklynSound["name"] = "Bootstrap";
const bass1Sound = new Howl({
  src: [bass1],
  name: "CSS",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    bass1Sound.once("unlock", function () {
      bass1Sound.play();
    });
  },
});
bass1Sound["name"] = "CSS";
const bass2Sound = new Howl({
  src: [bass2],
  name: "HTML",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    bass2Sound.once("unlock", function () {
      bass2Sound.play();
    });
  },
});
bass2Sound["name"] = "HTML";
const synth3Sound = new Howl({
  src: [synth3],
  name: "API's",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    synth3Sound.once("unlock", function () {
      synth3Sound.play();
    });
  },
});
synth3Sound["name"] = "API's";
const synth4Sound = new Howl({
  src: [synth4],
  name: "RESTframework",
  preload: true,
  loop: false,
  autoplay: false,
  mute: true,
  onplayerror: function () {
    synth4Sound.once("unlock", function () {
      synth4Sound.play();
    });
  },
});
synth4Sound["name"] = "RESTframework";

export const allSounds = [
  drumsSound,
  synth1Sound,
  synth2Sound,
  guitarSound,
  guitar2Sound,
  pianoSound,
  saxSound,
  guitar3Sound,
  maracasSound,
  tambourineSound,
  fireplaceSound,
  brooklynSound,
  bass1Sound,
  bass2Sound,
  synth3Sound,
  synth4Sound,
];
