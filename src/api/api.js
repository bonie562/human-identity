import Web2 from "../img/web 2/web2";
import { Tags } from "../img/TAGS/Tags";
import bimbeatWorks from "../img/bim works/bimbeatWorks";
import loca from "../img/loca works/loca";
import raveWorks from "../img/rave works/rave";
import creatirWorks from "../img/creatir/creatir";
import { WebImages } from "../img/website/WebImage";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const header = async () => {
  return {
    text: "",
    img: WebImages.Eye_4,
  };
};

export const myWork = async () => {
  return [
    {
      id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
      title: "ArtBoard 20",
      img: Tags.ArtBoard20,
      tag: "bimbeat",
      date: "2.02.24",
      desc: "Bimbeat is built for the emotionally tuned in, it brings you music that matches your mood pulled from your taste, your tribe, and your rhythm.",
      url: "/work/bimbeat",
      contents: bimbeatWorks.map(([key, img]) => {
        const isVideo = /\.(mp4|webm|ogg)$/i.test(img);

        return {
          id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
          title: key,
          img,
          type: isVideo ? "video" : "image",
        };
      }),
    },
    {
      id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
      title: "hwork 4",
      vid: Tags.HWork4,
      tag: "loca",
      date: "3.14.25",
      desc: "Loca is a bold new way to send, save, and spend made for every African, everywhere.",
      url: "/work/loca",
      contents: loca.map(([key, img]) => {
        const isVideo = /\.(mp4|webm|ogg)$/i.test(img);

        return {
          id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
          title: key,
          img,
          type: isVideo ? "video" : "image",
        };
      }),
    },
    {
      id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
      title: "Rave",
      vid: Tags.Rave,
      tag: "rave",
      date: "5.07.24",
      desc: "New city, new life same questions. Rave is the podcast where migrants share real stories, funny moments, and the journey of finding home again. Tune in, feel seen.",
      url: "/work/rave",
      contents: raveWorks.map(([key, img]) => {
        const isVideo = /\.(mp4|webm|ogg)$/i.test(img);

        return {
          id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
          title: key,
          img,
          type: isVideo ? "video" : "image",
        };
      }),
    },
    {
      id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
      title: "Intro",
      img: Tags.Intro,
      tag: "creatir",
      date: "01.04.25",
      desc: "Creatir is for the ones who don’t quit when the brief ends. An energy drink concept made for creatives who think loud, work late, and bring ideas to life. Built on passion. Designed to fuel it.",
      url: "/work/creatir",
      contents: creatirWorks.map(([key, img]) => {
        const isVideo = /\.(mp4|webm|ogg)$/i.test(img);

        return {
          id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
          title: key,
          img,
          type: isVideo ? "video" : "image",
        };
      }),
    },
  ];
};
