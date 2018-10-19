import axios from "axios";


let apis = {

	weightLossArticles: (topic) => {
		const authKey = "462a94997e72401b92d8f11524378eba";
		const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
		authKey + "&q="+topic;

		return axios.get(queryURL);
	},
	getFood: ()=>{
		return "testtertinfew"
	}
}

export default apis;