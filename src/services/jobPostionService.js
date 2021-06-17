import axios from "axios";

export default class JobPostionService{
    getJobPostions(){
        return axios.get("http://localhost:8080/api/jobpostions/getall")
    }
}