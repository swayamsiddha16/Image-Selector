import axios from "axios";

export default axios.create({
    baseUrl:"https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID TednsvtVoY7IWCNKHAMu-_421AaQ8Iz_ed1UODf_NzA"
    }
})


