import randomImgs from "../randowmPage/randomImgs/randomimgs";

export const redPillBluePill = [
  {
    label: "budweiser",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus harum nam amet earum accusantium natus itaque laudantium perspiciatis fuga nostrum obcaecati, ducimus labore alias blanditiis. Atque voluptates accusantium quod. Fugit?",
    contents: randomImgs.map(([key, img]) => {
      return {
        id: `${crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9)}_${key}`,
        title: key,
        img,
      };
    }),
  },
  {
    label: "red pill blue pill?",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus harum nam amet earum accusantium natus itaque laudantium perspiciatis fuga nostrum obcaecati, ducimus labore alias blanditiis. Atque voluptates accusantium quod. Fugit?",
  },
  {
    label: "emotionless design",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus harum nam amet earum accusantium natus itaque laudantium perspiciatis fuga nostrum obcaecati, ducimus labore alias blanditiis. Atque voluptates accusantium quod. Fugit?",
  },
];
