export const getAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const getPostById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const getPostByUserId = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
};
