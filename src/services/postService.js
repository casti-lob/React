// apiService.js
import axios from 'axios';

const baseURL = 'http://localhost:3000/posts';

const apiService = axios.create({
baseURL,
});

export const getPosts =()=> apiService.get('')

export const getPost = (postId) => {
return apiService.get(`/${postId}`);
};

export const createPost = (postData) => {
return apiService.post('/', postData);
};

export const updatePost = (postId, updatedData) => {
return apiService.put(`/${postId}`, updatedData);
};

export const deletePost = (postId) => {
return apiService.delete(`/${postId}`);
};