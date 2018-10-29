import axios from "axios";


let apis = {
  weightLossArticles: topic => {
  return axios.post('/articles',topic);
  },
  NutritionBreakdown: data =>{
    console.log(data)
    return axios.post('api/food', data)
  },
  getFood: () => {
    return axios.get('api/dailyprogress')
  },
  updateUser: function(id, userinfo) {
    console.log("saveuser: ", userinfo);
    return axios.post(`/api/updateuser/${id}`, userinfo);

  },
  getUser: () => {
    return axios.get(`/auth/login`);
  },
  updateUser: userinfo => {
    console.log("saveuser: ", userinfo);
    return axios.post(`/signup/{userinfo.user}`, userinfo);
  }
  // deleteUser: function(id) {
  //   return axios.get(`/api/savedusers/${id}`);
  // }
};

export default apis;
