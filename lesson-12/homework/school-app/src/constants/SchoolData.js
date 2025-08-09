export const lessons = [
  { id: 1, title: "Mathematics" },
  { id: 2, title: "Physics" },
  { id: 3, title: "Chemistry" },
  { id: 4, title: "Biology" },
  { id: 5, title: "History" },
  { id: 6, title: "Geography" },
];

export const teachers = [
  { id: 1, name: "Alice Johnson", lessons: [lessons[0], lessons[1]] },
  { id: 2, name: "Bob Smith", lessons: [lessons[2], lessons[3]] },
  { id: 3, name: "Carol White", lessons: [lessons[4], lessons[5]] },
  { id: 4, name: "David Brown", lessons: [lessons[0], lessons[2]] },
  { id: 5, name: "Eve Davis", lessons: [lessons[1], lessons[3]] },
  { id: 6, name: "Frank Wilson", lessons: [lessons[4], lessons[0]] },
  { id: 7, name: "Grace Miller", lessons: [lessons[5], lessons[2]] },
  { id: 8, name: "Henry Moore", lessons: [lessons[3], lessons[1]] },
  { id: 9, name: "Ivy Taylor", lessons: [lessons[0], lessons[4]] },
  { id: 10, name: "Jack Anderson", lessons: [lessons[2], lessons[5]] },
];
