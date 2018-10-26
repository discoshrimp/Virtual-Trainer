import axios from "axios";


let apis = {
  weightLossArticles: topic => {
    const authKey = "462a94997e72401b92d8f11524378eba";
    const queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey +
      "&q=" +
      topic;

    return axios.get('/articles',queryURL);
  },
  NutritionBreakdown: data =>{
  //   const app_key = '88aaf88bd591b1d07bffc2ee29030aa5'
	// 	const app_id = 'e5ea3d28'
	// 	const edamam = `http://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`
	// 	axios.post({
	// 		headers: 'Content-Type: application/json',
	// 		url: edamam,
	// 		body: data.body
	// 	}).then(data => {
	// 		res.json(data)
		// })
    console.log(data)
    return axios.post('/api/edamam', data)
  },
  getFood: () => {
    return axios.post('/dailyprogress')
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
