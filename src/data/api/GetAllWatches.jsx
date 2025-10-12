import axios from 'axios';
import { domain } from '../../store';
export const getAllWatches = async () => {
  let final = [];
  await axios.get(domain + '/api/watches?populate=*').then((res) => {
    final = res.data.data;
  });
  return final;
};
// export const getAllWatches = async () => await axios.get(domain + '/api/watches?populate=*');
