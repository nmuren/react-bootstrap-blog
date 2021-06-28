export const getAllComments = () => {
  return fetch("https://jsonplaceholder.typicode.com/comments");
};

export const getCommentsByPostId = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/comments?userId=${id}`);
};
