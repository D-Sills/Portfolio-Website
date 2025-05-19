import { Howl } from 'howler';

const sounds = {
  click: new Howl({
    src: ['/sounds/click.mp3'],
    volume: 1.0,
    preload: true,
  }),
  bigclick: new Howl({
    src: ['/sounds/big click.mp3'],
    volume: 1.0,
    preload: true,
  }),
  hover: new Howl({
    src: ['/sounds/hover.mp3'],
    volume: 1.0,
    preload: true,
  }),
  close: new Howl({
    src: ['/sounds/back.mp3'],
    volume: 1.0,
    preload: true,
  }),
};

export const bgm = new Howl({
  src: ['/sounds/BGM.ogg', '/sounds/BGM.mp3'],
  volume: 0.3,
  loop: true,
  preload: true,
});

export const skillNoteSounds: Howl[] = Array.from({ length: 8 }, (_, i) =>
  new Howl({
    src: [`/sounds/note-${i}.ogg`, `/sounds/note-${i}.mp3`], // fallback
    volume: 0.5,
    preload: true,
  })
);

export const playSound = (sound: keyof typeof sounds, audioEnabled: boolean = false, volume: number = 1.0) => {
  if (sounds[sound]) {
    sounds[sound].volume(volume);
    if (audioEnabled) {
      sounds[sound].play();
    }
  }
}

export default sounds;
