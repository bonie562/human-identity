import { music } from "./music/aboutMusic";
const { Kina, Wetin, MyBeliefs, MyApproach } = music;

export const aboutItems = [
  {
    id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
    label: "my beliefs",
    type: "about",
    details: `I know this is a controversial topic and might go over some people’s heads especially designers. The question of whether design is art has been debated for a long time. But personally, I truly believe design is art.\n
      That said, design comes with a responsibility not just to yourself, but to the people it's meant for. That belief, to me, creates a sense of maturity.
      It reminds me to see the design process not just as self-expression, but as something deeper, something shared. So I try to find a balance between art and design, or in this case, between creativity and functionality.\n
      Some designers thrive on the idea that “design is just design,” and that works for them. But like I always say, that’s what makes each of us unique. As designers, we all have our own taste, our beliefs. And clients? They have their own vision and their own idea of who is best to bring that vision to life.\n
      I just want to attract the kind of clients and collaborators who see me as the right fit who resonate with my works.`,
    audioSrc: MyBeliefs,
    url: "mybeliefs",
  },
  {
    id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
    label: "my approach",
    type: "about",
    details: `At human identity design studio, our process is rooted in clarity, collaboration, and purpose. Every project is unique, but i follow five core stages to keep the work focused and intentional. I start with Discovery, where i ask questions and gather insights about the brand, its audience, and its challenges.\n 
      Then comes Strategy, where i define the creative direction establishing the brand’s voice, positioning, and visual foundation. In the Exploration phase, i develop ideas, sketch concepts, and test multiple directions, always grounded in strategy but open to creative possibilities. This leads to Design & Refinement, where we craft every element with care and collaborate closely to ensure the work is both beautiful and effective. Finally, in Delivery & Support, i equip the clients with everything they need to launch confidently, offering guidance and assets to help bring the vision to life across every platform.`,
    audioSrc: MyApproach,
    url: "myapproach",
  },
  {
    id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
    label: "skill set",
    type: "about",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus harum nam amet earum accusantium natus itaque laudantium perspiciatis fuga nostrum obcaecati, ducimus labore alias blanditiis. Atque voluptates accusantium quod. Fugit?",
    audioSrc: Kina,
    url: "skillset",
  },
  {
    id: crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9),
    label: "human identity",
    type: "about",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus harum nam amet earum accusantium natus itaque laudantium perspiciatis fuga nostrum obcaecati, ducimus labore alias blanditiis. Atque voluptates accusantium quod. Fugit?",
    audioSrc: Wetin,
    url: "humanidentity",
  },
];
