import api from  './api-config';

export const addCommentToPost = async (postId, commentId) => {
  const resp = await api.put(`/posts/${postId}/foods/${commentId}`);
  return resp.data;
}

