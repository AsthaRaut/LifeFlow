const API_URL = "https://jsonplaceholder.typicode.com";


// GET all users
export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};


// GET all posts
export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};


// GET single post
export const getPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
};


// CREATE a post
export const createPost = async (postData) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
};