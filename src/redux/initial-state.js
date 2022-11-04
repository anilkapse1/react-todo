

export const todos = JSON.parse(localStorage.getItem("todos")) || [
    {
      id: 0,
      title: "let's add some todo",
      completed: false,
      important: false
    }
  ];
  