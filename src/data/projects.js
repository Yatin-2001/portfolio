export const projects = [
  // {
  //   title: "Next Generation Operations (NGO) Portal",
  //   tag: "OFFICE",
  //   description:
  //     "Job orchestration platform. Microservices with Saga pattern. Includes scheduling, orchestration, ACLs, real-time updates, retries, DLQs.",
  //   github: "https://github.com/your-repo-ngo-portal",
  //   tools: [
  //     "Node.js",
  //     "React.js",
  //     "Kafka",
  //     "Redis",
  //     "MongoDB",
  //     "Socket.IO",
  //     "Docker",
  //     "Kubernetes"
  //   ]
  // },
  // {
  //   title: "Playstore/Appstore Review Analysis",
  //   tag: "OFFICE",
  //   description:
  //     "Scraped app reviews, NLP preprocessing, ensemble model(LogReg, SVC, Naive Bayes, RNN, fine-tuned Distil-BERT). Achieved ~92% accuracy.",
  //   github: "https://github.com/your-repo-review-analysis",
  //   tools: ["Python", "NLTK", "SpaCy", "Hugging Face", "AWS Lambda"]
  // },
  {
    title: "OrderMe",
    tag: "PERSONAL",
    description:
      "An online Ordering & Inventory management backend microservices application designed using Node.js + Kafka, applying SAGA & CQRS pattern following event driven design. Used decorator pattern for coupon logic. Also exposed chatbot APIs using LangChain & Qdrant for vector DB.",
    image: `images/order_system.webp`,
    github: "https://github.com/Yatin-2001/OrderMe_App",
    tools: ["Node.js", "Kafka", "SAGA", "CQRS", "LangChain", "Qdrant"]
  },
  {
    title: "PayU",
    tag: "PERSONAL",
    description:
      "A Spring Boot microservices application designed with event drive design using Kafka & JWT, simulating Core Banking Service(CBS) of a Banking application. Services for ledger, user (KYC), accounting, API gateway via Feign. Learning project with event-driven design.",
    image: `images/payment_app.jpg`,
    github: "https://github.com/Yatin-2001/PayU",
    tools: ["Spring Boot", "Kafka", "JWT", "Feign", "REST API"]
  },
  {
    title: "Music Transcription",
    tag: "PERSONAL",
    description:
      "As a final year project in the College, built an Encoder-Decoder, CRNN(Convolutional Recurrent Neural Network) model to transcribe Indian Classical Music. The loss function used is - CTC(Connectionist Temporal Classification) loss, a genrally used loss function in ASR(Automatic Speech Recognition). Features used: STFT, CQT, melody contour. Published in ISACC journal of January 2023. Achieved ~13% WER(Word Error rate) with the best model.",
    paper: "https://ieeexplore.ieee.org/abstract/document/10083872",
    image: `images/asr.png`,
    tools: ["CNN", "RNN", "CTC Loss", "STFT", "CQT"]
  }
];

