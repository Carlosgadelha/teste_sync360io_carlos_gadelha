import { api } from "./api";


export const uploadImage = (image: File ) => {
  const formData = new FormData();
  formData.append('file', image);

  return api.post('/uploadProfileImage', formData).then((res) => res.data.fileName);
};
