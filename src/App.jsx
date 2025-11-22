import Section1 from "./components/section1/Section1";

const users = [
  {
    image:
      "https://i.pinimg.com/1200x/89/b8/72/89b872c6f4873df22539cea77b5eccb1.jpg",

    description:
      "A dark fantasy-adventure set in a mysterious village, where inspector Vikrant Rona uncovers supernatural secrets, eerie murders, and hidden truths while facing fear, betrayal, and unexpected twists.",
    status: "Vikrant Rona",
  },
  {
    image:
      "https://i.pinimg.com/736x/d2/2c/82/d22c8253a8fb561244e0b82beeaec89b.jpg",

    description:
      "An action-thriller featuring Sudeep in a dual-shaded role, where a calm man is suspected of being a master thief, blending suspense, style, justice, and clever mind games.",
    status: "Kotigobba",
  },
  {
    image:
      "https://i.pinimg.com/1200x/b2/bb/c3/b2bbc312a08daec52e2a274c933cf8d0.jpg",

    description:
      "A mass-action drama where Big Boss, a powerful underworld figure, mentors youngsters while battling betrayal, crime syndicates, emotional conflicts, and personal struggles, showcasing Sudeep’s strong screen presence.",
    status: "BigBoss",
  },
  {
    image:
      "https://i.pinimg.com/1200x/10/67/95/106795f898f5f01b386240778dc0c28b.jpg",

    description:
      "A multilingual action-crime film featuring Sudeep as a mysterious, intense character entangled in revenge, emotional pain, investigation, and morally complex choices opposite Mohanlal in a stylish narrative.",
    status: "Villain",
  },
  {
    image:
      "https://i.pinimg.com/736x/b6/aa/05/b6aa056d3ca0d7f2becebc2010124f09.jpg",

    description:
      "A multilingual action-crime film featuring Sudeep as a mysterious, intense character entangled in revenge, emotional pain, investigation, and morally complex choices opposite Mohanlal in a stylish narrative.",
    status: "Villain",
  },
];

const App = () => {
  return (
    <div className="">
      <Section1 users={users} />
    </div>
  );
};

export default App;
