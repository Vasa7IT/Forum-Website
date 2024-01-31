var defaultThreads = [
  {
    id: 1,
    title: "Thread 1",
    author: "Bala",
    date: Date.now(),
    content: "Thread content",
    comments: [
      {
        author: "Arun",
        date: Date.now(),
        content: "Hey there",
      },
      {
        author: "Mohan",
        date: Date.now(),
        content: "Hey Arun",
      },
    ],
  },
  {
    id: 2,
    title: "Thread 2",
    author: "Vasa",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
      {
        author: "Sita",
        date: Date.now(),
        content: "Hey there",
      },
      {
        author: "Prakash",
        date: Date.now(),
        content: "Hey sita",
      },
    ],
  },
];

var threads = defaultThreads;
if (localStorage && localStorage.getItem("threads")) {
  threads = JSON.parse(localStorage.getItem("threads"));
} else {
  threads = defaultThreads;
  localStorage.setItem("threads", JSON.stringify(defaultThreads));
}
