import axios from "axios";


let apis = {
  weightLossArticles: topic => {
    const authKey = "462a94997e72401b92d8f11524378eba";
    const queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey +
      "&q=" +
      topic;

    return axios.get(queryURL);
  },
<<<<<<< HEAD:client/src/utils/apis.js
  NutritionBreakdown: data => {
    console.log(data);
    return axios.post("/newfood", data);
  },
  getFood: () => {
    return axios.get("/dailyprogress");
  },
  getArticles: () => {
    return axios.get("/savearticles");
  },
  saveArticles: article => {
    return axios.post("/savearticles", article);
  },
  deleteArticles: id => {
    return axios.delete(`/savearticles/${id}`);
=======
  NutritionBreakdown: data =>{
    console.log(data)
    return axios.post('/food', data)
  },
  getFood: () => {
    return axios.get('/dailyprogress')
  },
  updateUser: function(id, userinfo) {
    console.log("saveuser: ", userinfo);
    return axios.post(`/api/updateuser/${id}`, userinfo);

>>>>>>> e789c728ba3dac32fc2c3e3c03a9e44da2fa2fe6:virtual-trainer/client/src/utils/apis.js
  },
  getUser: () => {
    return axios.get(`/auth/login`);
  },
  getProfile: user => {
    console.log("profile to get: ", user);
    return axios.get("/profile/user", user);
  },
  updateUser: userinfo => {
    console.log("saveuser: ", userinfo);
    return axios.post(`/signup/{userinfo.user}`, userinfo);
  },
<<<<<<< HEAD:client/src/utils/apis.js
  getAccount: username => {
    console.log("delete user: ", username);
    return axios.get("/signup/username", username);
=======
  deleteUser: function(id) {
    return axios.get(`/api/savedusers/${id}`);
  },
  getArticles: ()=> {
    return axios.get("/api/savearticles");
  },
  saveArticles:(article)=>{
    return axios.post("/api/savearticles", article);
  },
  deleteArticles:(id)=>{
    return axios.delete(`/api/savearticles/${id}`);
>>>>>>> e789c728ba3dac32fc2c3e3c03a9e44da2fa2fe6:virtual-trainer/client/src/utils/apis.js
  }
  // deleteUser: function(id) {
  //   return axios.get(`/api/savedusers/${id}`);
  // }
};

export default apis;
