import axios from "axios";

export default class JobAdvertService{
    getJobadverts(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getAll")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getById?id="+id)
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisement/add",values)
    }
}

