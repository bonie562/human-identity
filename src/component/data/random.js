// import {randomImgs, redPillBluePillImg, nowDesignImg} from "../randowmPage/randomImgs/randomimgs";

import {
  nowDesignImg,
  randomImgs,
  redPillBluePillImg,
} from "../randowmPage/randomImgs/randomimgs";

export const randomData = [
  {
    label: "budweiser",
    type: "random",
    details:
      "<b>Budweiser</b> — The Throne Still Stands. This campaign reimagines Budweiser’s legacy as the true King of Beers, drawing from its rich heritage and long standing presence. The concept? A visual world built around a castle fit for a king bold, timeless, and untouchable. Because kings don’t chase crowns. They wear them.",
    contents: randomImgs.map(([key, img]) => {
      const isVideo = /\.(mp4|webm|ogg)$/i.test(img);
      return {
        id: `${
          crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9)
        }_${key}`,
        title: key,
        img,
        type: isVideo ? "video" : "image",
      };
    }),
    url: 'budweiser'
  },
  {
    label: "red pill blue pill?",
    type: "random",
    details:
      "<b>Red Pill. Blue Pill. I just want to be a man.</b> <br/>In a world constantly trying to box men into extremes red pill aggression or blue pill submission I’ve never wanted either. I just want to be a man  present, grounded, human. <br/>Not a walking podcast take. Not a reaction to culture. Just a man trying to show up with strength, softness, and sense. Because masculinity isn’t a performance. It’s not about choosing a side. It’s about choosing to grow.",
    contents: redPillBluePillImg.map(([key, img]) => {
      const isVideo = /\.(mp4|webm|ogg)$/i.test(img);
      return {
        id: `${
          crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9)
        }_${key}`,
        title: key,
        img,
        type: isVideo ? "video" : "image",
      };
    }),
    url: 'redpillbluepill'
  },
  {
    label: "emotionless design",
    type: "random",
    details:
      "Design today is fast, AI-driven, and everywhere, but looking good isn’t the same as meaning something. Great brands are built on vision, intention, and connection the kind that takes time, Virgil Abloh did this beautifully. \nHe brought his background, culture, and community into his work, making it feel both personal and global. We don’t have to be Virgil Abloh. But we all have our stories and that’s where original design begins.",
    contents: nowDesignImg.map(([key, img]) => {
      const isVideo = /\.(mp4|webm|ogg)$/i.test(img);
      return {
        id: `${
          crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9)
        }_${key}`,
        title: key,
        img,
        type: isVideo ? "video" : "image",
      };
    }),
    url: 'emotionlessdesign'
  },
];
