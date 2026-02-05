export const myProjects = [
  {
    id: 1,
    title: "Food Image Similarity Search",
    description:
      "AI-powered food image similarity and recommendation system using Triplet Networks.",
    subDescription: [
      "An AI-powered food image similarity search and recommendation system that retrieves visually similar food images using deep learning–based embeddings trained with a Triplet Network.",
      "Backbone Network: VGG16 (pretrained on ImageNet) for feature extraction",
      "Training Strategy: Triplet Loss (Anchor, Positive, Negative samples) to learn discriminative embeddings",
      "Embedding Size: 256 dimensions for efficient similarity computation",
      "Similarity Metric: Cosine Similarity for ranking similar images",
    ],
    href: "https://github.com/GumanBehera15/food-image-similarity-search.git",
    logo: "",
    image: "/assets/projects/image-search.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "TensorFlow",
        path: "/assets/logos/tensorflow.svg",
      },
      {
        id: 3,
        name: "Streamlit",
        path: "/assets/logos/streamlit.png",
      },
      {
        id: 4,
        name: "Scikit-Learn",
        path: "/assets/logos/scikit_learn.png",
      },
    ],
  },
  {
    id: 2,
    title: "Arena Titans",
    description:
      "Designed an advanced AI opponent system using Unity ML-Agents with reinforcement learning, allowing enemies to adapt and strategize using state machines and behaviour trees. ",
    subDescription: [
      "Integrated Deep Motion for 3D animation blending and Mixamo for realistic motion-captured character rigs, creating lifelike combat mechanics.",
      "Built and optimized multiple Sketchfab/Open3D stages with custom rigged models, showcasing strong understanding of AI decision-making, animation pipelines, and performance tuning in Unity.",
    
    ],
    href: "",
    logo: "",
    image: "/assets/projects/arena-titans.jpeg",
    tags: [
      {
        id: 1,
        name: "Unity",
        path: "/assets/logos/unity.svg",
      },
      {
        id: 2,
        name: "Mixamo",
        path: "/assets/logos/mixamo.png",
      },
    ],
  },
  {
    id: 3,
    title: "Waste Classification Project",
    description:
      "An AI-powered waste classification system that automatically identifies the type of waste from an image using deep learning.",
    subDescription: [
      "AI-Driven Classification: Utilizes deep learning and computer vision to automatically classify waste images based on visual features such as shape, texture, and color.",
      "CNN-Based Model: Employs a trained Convolutional Neural Network (CNN) to accurately predict waste categories from input images.",
      "Fast & User-Friendly: Delivers real-time predictions through an intuitive application interface, minimizing manual intervention.",
      "Sustainability Focus: Demonstrates how AI can enhance waste segregation efficiency and support environmentally responsible waste management practices.",
    ],
    href: "https://github.com/GumanBehera15/waste-classification-project.git",
    logo: "",
    image: "/assets/projects/waste.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "TesnsorFlow",
        path: "/assets/logos/tensorflow.svg",
      },
      {
        id: 3,
        name: "Streamlit",
        path: "/assets/logos/streamlit.png",
      },
    ],
  },
  {
    id: 4,
    title: "Sign Language Assistant",
    description:
      "An AI-powered sign language recognition system that translates sign language gestures into text and speech.",
    subDescription: [
      "Built a real-time sign language recognition system that captures live hand gestures via OpenCV and detects keypoints using MediaPipe, achieving 90%+ accuracy.",
      "Designed and trained a deep learning model using TensorFlow/Keras to classify gestures, displaying recognized signs as on-screen text or converting them into speech via TTS engine.",
      "Enhanced accessibility for hearing-impaired users by enabling seamless gesture-to-voice communication through an intuitive Python interface.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "TensorFlow",
        path: "/assets/logos/tensorflow.svg",
      },
      {
        id: 3,
        name: "OpenCV",
        path: "/assets/logos/OpenCVsvg.svg",
      },
      {
        id: 4,
        name: "MediaPipe",
        path: "/assets/logos/mediapipe.svg",
      },
    ],
  },
//   {
//     id: 5,
//     title: "WordPress Custom Theme",
//     description:
//       "A fully customizable WordPress theme optimized for performance and SEO.",
//     subDescription: [
//       "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
//       "Integrated Tailwind CSS for modern styling and UI enhancements.",
//       "Optimized SEO and page speed using Vite.js for fast builds.",
//       "Implemented custom widgets and plugin compatibility for extended functionality.",
//     ],
//     href: "",
//     logo: "",
//     image: "/assets/projects/wordpress-theme.jpg",
//     tags: [
//       {
//         id: 1,
//         name: "WordPress",
//         path: "/assets/logos/wordpress.svg",
//       },
//       {
//         id: 2,
//         name: "HTML5",
//         path: "/assets/logos/html5.svg",
//       },
//       {
//         id: 3,
//         name: "CSS3",
//         path: "/assets/logos/css3.svg",
//       },
//       {
//         id: 4,
//         name: "Vite.js",
//         path: "/assets/logos/vitejs.svg",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "Online Learning Platform",
//     description:
//       "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
//     subDescription: [
//       "Built using Blazor WebAssembly for a seamless SPA experience.",
//       "Implemented video streaming with Azure Media Services.",
//       "Added a quiz system with dynamic question generation and real-time grading.",
//       "Integrated Stripe API for secure payment processing.",
//     ],
//     href: "",
//     logo: "",
//     image: "/assets/projects/elearning.jpg",
//     tags: [
//       {
//         id: 1,
//         name: "Blazor",
//         path: "/assets/logos/blazor.svg",
//       },
//       {
//         id: 2,
//         name: "Azure",
//         path: "/assets/logos/azure.svg",
//       },
//       {
//         id: 3,
//         name: "Stripe",
//         path: "/assets/logos/stripe.svg",
//       },
//       {
//         id: 4,
//         name: "TailwindCSS",
//         path: "/assets/logos/tailwindcss.svg",
//       },
//     ],
//   },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Android Developer Intern",
    job: "Google for Developers",
    date: "July - Sept 2024",
    contents: [
      "Collaborated with cross-functional teams to design, develop, and deploy Android applications using Java and Kotlin.",
      "Conducted code reviews and implemented best practices to ensure high-quality software delivery.",
      "Optimized application performance and resolved bugs to enhance user experience.",
    ],
  },
  {
    title: "AI/ML Engineer Intern",
    job: "Google Gemini",
    date: "Oct - Dec 2024",
    contents: [
      "Assisted in developing and fine-tuning machine learning models for natural language processing tasks using TensorFlow and PyTorch.",
      "Conducted data preprocessing and feature engineering to improve model accuracy and performance.",
      "Collaborated with senior engineers to implement AI solutions and integrate them into existing systems.",
    ],
  },
  {
    title: "Data Science Intern",
    job: "IBM",
    date: "Mar 2025",
    contents: [
      "Analyzed large datasets using Python to extract insights and support data-driven decision-making.",
      "Developed predictive models and visualizations to communicate findings to stakeholders.",
      "Collaborated with cross-functional teams to implement data solutions and improve business processes.",
    ],
  },
   {
    title: "Game Development Intern",
    job: "Deepcyctes",
    date: "Jan 2026 - Present",
    contents: [
      "Analyzed large datasets using Python to extract insights and support data-driven decision-making.",
      "Developed predictive models and visualizations to communicate findings to stakeholders.",
      "Collaborated with cross-functional teams to implement data solutions and improve business processes.",
    ],
  },
];
export const reviews = [
  {
    name: "Guman Behera",
    username: "@gumanbehera-10",
    body: ["SSC From Holy Cross School \n", 
          "\n 2008 - 2020",],
    img: "https://robohash.org/jack",
  },
  {
    name: "Guman Behera",
    username: "@gumanbehera",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  // {
  //   name: "Alice",
  //   username: "@alice",
  //   body: "This is hands down the best thing I've experienced. Highly recommend!",
  //   img: "https://robohash.org/alice",
  // },
  // {
  //   name: "Bob",
  //   username: "@bob",
  //   body: "Incredible work! The attention to detail is phenomenal.",
  //   img: "https://robohash.org/bob",
  // },
  // {
  //   name: "Charlie",
  //   username: "@charlie",
  //   body: "This exceeded all my expectations. Absolutely stunning!",
  //   img: "https://robohash.org/charlie",
  // },
  // {
  //   name: "Dave",
  //   username: "@dave",
  //   body: "Simply breathtaking. The best decision I've made in a while.",
  //   img: "https://robohash.org/dave",
  // },
  // {
  //   name: "Eve",
  //   username: "@eve",
  //   body: "So glad I found this. It has changed the game for me.",
  //   img: "https://robohash.org/eve",
  // },
];