import api from './api-config';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}