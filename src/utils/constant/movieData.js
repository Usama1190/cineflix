const movies = [
  {
    id: 1,
    isrotate: true,
    title: "Mission: Impossible – Dead Reckoning Part Two",
    year: 2025,
    rating: 8.6,
    producer: "Tom Cruise",
    director: "Christopher McQuarrie",
    description:
      "Ethan Hunt and his team embark on their most dangerous mission yet.",
    status: "Upcoming",
    budget: "$200M",
    revenue: "N/A",
    language: "English",
    cinema: "Paramount Pictures",
    release_date: "May 23, 2025",
    image_url: "/assets/imgs/missionimposiblepart2.jpeg",
    img_alt: 'Mission: Impossible – Dead Reckoning Part Two image',
    trailer: "https://www.youtube.com/watch?v=example",
  },
  {
    id: 2,
    isrotate: false,
    title: "Deadpool 3",
    year: 2024,
    rating: 8.5,
    producer: "Kevin Feige",
    director: "Shawn Levy",
    description:
      "Wade Wilson returns as Deadpool, teaming up with Wolverine for a new adventure.",
    status: "Upcoming",
    budget: "$150M",
    revenue: "N/A",
    language: "English",
    cinema: "Marvel Studios",
    release_date: "July 26, 2024",
    image_url: "/assets/imgs/deadpool3.jpeg",
    img_alt: 'Deadpool 3 image',
    trailer: "https://www.youtube.com/watch?v=example",
  },
  {
    id: 3,
    isrotate: true,
    title: "Joker: Folie à Deux",
    year: 2024,
    rating: 8.7,
    producer: "Todd Phillips",
    director: "Todd Phillips",
    description:
      "A sequel to the 2019 film 'Joker', exploring the relationship between Arthur Fleck and Harley Quinn.",
    status: "Upcoming",
    budget: "$100M",
    revenue: "N/A",
    language: "English",
    cinema: "Warner Bros.",
    release_date: "October 4, 2024",
    image_url: "/assets/imgs/jokerfolieadeux.jpeg",
    img_alt: 'Joker: Folie à Deux image',
    trailer: "https://www.youtube.com/watch?v=example",
  },
  {
    id: 4,
    isrotate: false,
    title: "Avatar 3",
    year: 2025,
    rating: 9.0,
    producer: "James Cameron",
    director: "James Cameron",
    description:
      "The third installment in the Avatar franchise, continuing the saga of the Na'vi people.",
    status: "Upcoming",
    budget: "$250M",
    revenue: "N/A",
    language: "English",
    cinema: "20th Century Studios",
    release_date: "December 19, 2025",
    image_url: "/assets/imgs/avatar3.jpeg",
    img_alt: 'Avatar 3 image',
    trailer: "https://www.youtube.com/watch?v=example",
  },
  {
    id: 5,
    isrotate: true,
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.9,
    producer: "Denis Villeneuve",
    director: "Denis Villeneuve",
    description:
      "Paul Atreides unites with the Fremen to seek revenge against those who destroyed his family.",
    status: "Upcoming",
    budget: "$165M",
    revenue: "N/A",
    language: "English",
    cinema: "Warner Bros.",
    release_date: "March 1, 2024",
    image_url: "/assets/imgs/dunepart2.jpeg",
    img_alt: 'Dune: Part Two image',
    trailer: "https://www.youtube.com/watch?v=example",
  },
  {
    id: 6,
    isrotate: false,
    title: "Godzilla x Kong: The New Empire",
    year: 2024,
    rating: 8.3,
    producer: "Adam Wingard",
    director: "Adam Wingard",
    description:
      "The two titans team up to battle a new and powerful enemy that threatens their world.",
    status: "Upcoming",
    budget: "$200M",
    revenue: "N/A",
    language: "English",
    cinema: "Legendary Pictures",
    release_date: "March 29, 2024",
    image_url: "/assets/imgs/godzillaxkong.jpeg",
    img_alt: 'Godzilla x Kong: The New Empire image',
    trailer: "https://www.youtube.com/watch?v=example",
  },
  {
    id: 7,
    isrotate: true,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    release_date: "May 5, 2023",
    rating: 8.2,
    producer: "Kevin Feige",
    director: "James Gunn",
    description: "The Guardians must face new threats while navigating the cosmic adventures and challenges of their ever-expanding family.",
    status: "Released",
    budget: "$250M",
    revenue: "$850M",
    language: "English",
    cinema: "Marvel Studios",
    image_url: "/assets/imgs/guardiansvol3.jpeg",
    img_alt: "Guardians of the Galaxy Vol. 3 image",
    trailer: "https://www.youtube.com/watch?v=example",
},
{
    id: 8,
    isrotate: false,
    title: "The Flash",
    year: 2023,
    release_date: "June 16, 2023",
    rating: 7.5,
    producer: "Barbara Muschietti",
    director: "Andy Muschietti",
    description: "Barry Allen races through time to prevent the murder of his mother, which brings unintended consequences to his timeline.",
    status: "Released",
    budget: "$200M",
    revenue: "$800M",
    language: "English",
    cinema: "Warner Bros.",
    image_url: "/assets/imgs/theflash.jpeg",
    img_alt: "The Flash image",
    trailer: "https://www.youtube.com/watch?v=example",
},
{
    id: 9,
    isrotate: true,
    title: "The Marvels",
    year: 2023,
    release_date: "November 10, 2023",
    rating: 7.8,
    producer: "Kevin Feige",
    director: "Nia DaCosta",
    description: "Carol Danvers, Kamala Khan, and Monica Rambeau team up to battle an intergalactic threat that could alter the fate of the universe.",
    status: "Released",
    budget: "$200M",
    revenue: "$600M",
    language: "English",
    cinema: "Marvel Studios",
    image_url: "/assets/imgs/themarvels.jpeg",
    img_alt: "The Marvels image",
    trailer: "https://www.youtube.com/watch?v=example",
},
{
    id: 10,
    isrotate: false,
    title: "Mission: Impossible – Dead Reckoning Part One",
    year: 2023,
    release_date: "July 12, 2023",
    rating: 8.7,
    producer: "Tom Cruise",
    director: "Christopher McQuarrie",
    description: "Ethan Hunt embarks on a mission to stop a global threat, with new dangerous alliances and unimaginable challenges.",
    status: "Released",
    budget: "$300M",
    revenue: "$750M",
    language: "English",
    cinema: "Paramount Pictures",
    image_url: "/assets/imgs/missionimpossiblepart1.jpeg",
    img_alt: "Mission: Impossible – Dead Reckoning Part One image",
    trailer: "https://www.youtube.com/watch?v=example",
},
{
    id: 11,
    isrotate: true,
    title: "Indiana Jones and the Dial of Destiny",
    year: 2023,
    release_date: "June 30, 2023",
    rating: 7.3,
    producer: "Kathleen Kennedy",
    director: "James Mangold",
    description: "Indiana Jones embarks on one last adventure to prevent an ancient artifact from falling into the wrong hands.",
    status: "Released",
    budget: "$275M",
    revenue: "$500M",
    language: "English",
    cinema: "Lucasfilm",
    image_url: "/assets/imgs/indianajones.jpeg",
    img_alt: "Indiana Jones and the Dial of Destiny image",
    trailer: "https://www.youtube.com/watch?v=example",
},
{
    id: 12,
    isrotate: false,
    title: "The Little Mermaid",
    year: 2023,
    release_date: "May 26, 2023",
    rating: 6.8,
    producer: "Alan Menken",
    director: "Rob Marshall",
    description: "A live-action remake of Disney's classic animated film, as Ariel, the young mermaid, seeks to find love and freedom.",
    status: "Released",
    budget: "$250M",
    revenue: "$700M",
    language: "English",
    cinema: "Walt Disney Studios",
    image_url: "/assets/imgs/thelittlemermaid.jpeg",
    img_alt: "The Little Mermaid image",
    trailer: "https://www.youtube.com/watch?v=example",
}
,
{
  id: 13,
  isrotate: true,
  title: "Oppenheimer",
  year: 2023,
  rating: 8.9,
  producer: "Christopher Nolan",
  director: "Christopher Nolan",
  description:
    "The story of J. Robert Oppenheimer and the development of the atomic bomb, highlighting the moral dilemmas of nuclear weapons.",
  status: "Released",
  budget: "$100M",
  revenue: "$1B",
  language: "English",
  cinema: "Universal Pictures",
  release_date: "July 21, 2023",
  image_url: "/assets/imgs/oppenheimer.jpeg",
  img_alt: "Oppenheimer image",
  trailer: "https://www.youtube.com/watch?v=example"
},
{
  id: 14,
  isrotate: false,
  title: "Spider-Man: Across the Spider-Verse",
  year: 2023,
  rating: 9.0,
  producer: "Phil Lord",
  director: "Joaquim Dos Santos",
  description:
    "Miles Morales teams up with various Spider-Men from different universes to fight a common threat.",
  status: "Released",
  budget: "$200M",
  revenue: "$700M",
  language: "English",
  cinema: "Sony Pictures Animation",
  release_date: "June 2, 2023",
  image_url: "/assets/imgs/spidermanacrossthespiderverse.jpeg",
  img_alt: "Spider-Man: Across the Spider-Verse image",
  trailer: "https://www.youtube.com/watch?v=example"
},
{
  id: 15,
  isrotate: true,
  title: "Barbie",
  year: 2023,
  rating: 7.2,
  producer: "Margot Robbie",
  director: "Greta Gerwig",
  description:
    "Barbie leaves her perfect world to explore the real world, discovering more about herself and humanity in the process.",
  status: "Released",
  budget: "$145M",
  revenue: "$1.3B",
  language: "English",
  cinema: "Warner Bros.",
  release_date: "July 21, 2023",
  image_url: "/assets/imgs/barbie.jpeg",
  img_alt: "Barbie image",
  trailer: "https://www.youtube.com/watch?v=example"
},
{
  id: 16,
  isrotate: false,
  title: "Scream VI",
  year: 2023,
  rating: 6.5,
  producer: "Kevin Williamson",
  director: "Matt Bettinelli-Olpin",
  description:
    "Ghostface returns to terrorize a new group of victims in New York City, leading to a thrilling chase for survival.",
  status: "Released",
  budget: "$50M",
  revenue: "$120M",
  language: "English",
  cinema: "Paramount Pictures",
  release_date: "March 10, 2023",
  image_url: "/assets/imgs/scream7.jpeg",
  img_alt: "Scream VI image",
  trailer: "https://www.youtube.com/watch?v=example"
},
{
  id: 17,
  isrotate: true,
  title: "The Hunger Games: The Ballad of Songbirds and Snakes",
  year: 2023,
  rating: 7.8,
  producer: "Suzanne Collins",
  director: "Francis Lawrence",
  description:
    "A prequel to The Hunger Games series, telling the story of Coriolanus Snow’s rise to power in the Capitol.",
  status: "Released",
  budget: "$200M",
  revenue: "$500M",
  language: "English",
  cinema: "Lionsgate Films",
  release_date: "November 17, 2023",
  image_url: "/assets/imgs/thehungergames.jpeg",
  img_alt: "The Hunger Games: The Ballad of Songbirds and Snakes image",
  trailer: "https://www.youtube.com/watch?v=example"
},
{
  id: 18,
  isrotate: false,
  title: "Fast & Furious 10",
  year: 2023,
  rating: 6.9,
  producer: "Vin Diesel",
  director: "Louis Leterrier",
  description:
    "Dom Toretto and his family face their most dangerous mission yet, racing against time to defeat an international criminal mastermind.",
  status: "Released",
  budget: "$340M",
  revenue: "$800M",
  language: "English",
  cinema: "Universal Pictures",
  release_date: "May 19, 2023",
  image_url: "/assets/imgs/fastandfurious.jpeg",
  img_alt: "Fast & Furious 10 image",
  trailer: "https://www.youtube.com/watch?v=example"
}

];

export default movies;
