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
  getFood: () => {
    return "testtertinfew";
  },
  updateUser: function(id, userinfo) {
    console.log("saveuser: ", userinfo);
    return axios.post(`/api/updateuser/${id}`, userinfo);
  },
  loadUserName: function() {
    return axios.get("/api/savedusers");
  },
  loadUserNameById: function(id) {
    return axios.get(`/api/savedusers/${id}`);
  },
  deleteUser: function(id) {
    return axios.get(`/api/savedusers/${id}`);
  }
};

export default apis;
