import axios from 'axios';
import { domain } from '../../store';

export const getWatchDetails = async (watch_id) => {
  let final = {};

  await axios
    .get(domain + `/api/watches/${watch_id}`, {
      params: { populate: '*' },
    })
    .then((res) => {
      final = res.data.data;
    });

  return final;
};

// url backend
// domain + endPoint => Query Paramters ?price=500&cat=rolex&populate=*
// optional data with to the end point
