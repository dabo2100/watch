import axios from "axios";
import { domain } from "../../store";
import { Watch } from "lucide-react";

export const getAllCategories = async () => {
  let Categories = [];

  await axios.get(domain + "/api/categories" , {
    params: {
        populate: {
            watches:{ populate:"*" }
        }
    }
  }).then((res) => {
    Categories = res.data.data;
    console.log(res.data.data)
  });
  return Categories;
};
