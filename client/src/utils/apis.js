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
  NutritionBreakdown: data => {
    console.log(data);
    return axios.post("/newfood", data);
  },

  getTotalCalorie: () => {
    return axios.get("/dailyprogress");
  },
  getArticles: () => {
    return axios.get("/api/savearticles");
  },
  saveArticles: article => {
    return axios.post("/api/savearticles", article);
  },
  deleteArticles: id => {
    return axios.delete(`/api/savearticles/${id}`);
  },
  getUser: () => {
    return axios.get(`/auth/login`);
  },
  getProfile: user => {
    console.log("profile to get: ", user);
    return axios.get("/profile/" + user);
  },
  updateUser: userinfo => {
    console.log("saveuser: ", userinfo);
    return axios.post(`/signup/{userinfo.user}`, userinfo);
  },
  getAccount: username => {
    console.log("delete user: ", username);
    return axios.get("/signup/username", username);
  }
  // deleteUser: function(id) {
  //   return axios.get(`/api/savedusers/${id}`);
  // }
};

export default apis;
