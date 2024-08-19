import axios from 'axios';
const baseUrl = 'http://localhost:4500/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const overwrite = (id, newObject) => {
  const request = axios.patch(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};
// axios.patch was used to update the data in the server. The patch method is used to apply partial modifications to a resource. This means that you are allowed to send only the data that you want to update, and it won't affect the other data in the resource.
// axios.delete was used to delete the data in the server. The delete method is used to delete a resource from the server. It is used to delete the resource at the specified URL.
export default { getAll, create, update, remove, overwrite };
