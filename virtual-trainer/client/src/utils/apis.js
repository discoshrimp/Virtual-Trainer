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
  createUser: function(userinfo){
    console.log(`new user: ${userinfo}`)
    return axios.post('/api/createuser', userinfo)
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
