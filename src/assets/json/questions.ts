import { IQuestion } from "../../models/question";

export const questions: Array<IQuestion> = [
  {
    id: 1,
    name: "For which of the following disciplines is Nobel Prize awarded?",
    category: "general",
    difficulty: "easy",
    multipleAnswer: true,
    options: [
      {
        name: "Physics and Chemistry",
        correct: true,
      },
      {
        name: "Mathematics",
        correct: false,
      },
      {
        name: "Physiology or Medicine",
        correct: true,
      },
      {
        name: "Literature, Peace and Economics",
        correct: true,
      },
    ],
  },
  {
    id: 2,
    name: "What is a group of rats called?",
    category: "general",
    difficulty: "medium",
    multipleAnswer: true,
    options: [
      {
        name: "A pack",
        correct: false,
      },
      {
        name: "A chaos",
        correct: false,
      },
      {
        name: "A mischief",
        correct: true,
      },
      {
        name: "A destruction",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    name: "what is the most popular pet in the UK?",
    category: "general",
    difficulty: "hard",
    multipleAnswer: true,
    options: [
      {
        name: "Cats",
        correct: false,
      },
      {
        name: "Dogs",
        correct: true,
      },
      {
        name: "Rabbits",
        correct: false,
      },
      {
        name: "Goldfish",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    name: "What colour are Smurfs?",
    category: "general",
    difficulty: "easy",
    multipleAnswer: true,
    options: [
      {
        name: "Red",
        correct: false,
      },
      {
        name: "Yellow",
        correct: false,
      },
      {
        name: "Green",
        correct: false,
      },
      {
        name: "Blue",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    name: "What is the longest river in the world?",
    category: "general",
    difficulty: "hard",
    multipleAnswer: true,
    options: [
      {
        name: "The Amazon",
        correct: false,
      },
      {
        name: "The Nile",
        correct: true,
      },
      {
        name: "The Congo",
        correct: false,
      },
      {
        name: "The Yangtze",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    name: "Entomology is the science that studies",
    category: "general",
    difficulty: "easy",
    multipleAnswer: false,
    options: [
      {
        name: "Behavior of human beings",
        correct: false,
      },
      {
        name: "Insects",
        correct: true,
      },
      {
        name: "The origin and history of technical and scientific terms",
        correct: false,
      },
      {
        name: "The formation of rocks",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    name: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
    category: "general",
    difficulty: "medium",
    multipleAnswer: false,
    options: [
      {
        name: "Asia",
        correct: false,
      },
      {
        name: "Africa",
        correct: true,
      },
      {
        name: "Europe",
        correct: false,
      },
      {
        name: "Australia",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    name: "Epsom (England) is the place associated with",
    category: "general",
    difficulty: "hard",
    multipleAnswer: false,
    options: [
      {
        name: "Horse racing",
        correct: true,
      },
      {
        name: "Polo",
        correct: false,
      },
      {
        name: "Shooting",
        correct: false,
      },
      {
        name: "Snooker",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    name: "Durand Cup is associated with the game of",
    category: "general",
    difficulty: "easy",
    multipleAnswer: false,
    options: [
      {
        name: "Cricket",
        correct: false,
      },
      {
        name: "Football",
        correct: true,
      },
      {
        name: "Hockey",
        correct: false,
      },
      {
        name: "Volleyball",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    name: "For galvanizing iron which of the following metals is used?",
    category: "general",
    difficulty: "easy",
    multipleAnswer: false,
    options: [
      {
        name: "Aluminium",
        correct: false,
      },
      {
        name: "Copper",
        correct: false,
      },
      {
        name: "Lead",
        correct: false,
      },
      {
        name: "Zinc",
        correct: true,
      },
    ],
  },
];
