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

  },
  getUser: () => {
    return axios.get(`/auth/login`);
  },
  updateUser: userinfo => {
    console.log("saveuser: ", userinfo);
    return axios.post(`/signup/{userinfo.user}`, userinfo);
  },
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
  }
  // deleteUser: function(id) {
  //   return axios.get(`/api/savedusers/${id}`);
  // }
};

export default apis;
