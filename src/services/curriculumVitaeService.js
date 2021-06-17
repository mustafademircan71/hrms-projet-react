import axios from "axios";

export default class CurriclumVitaeService{
    getCurriclumVitae(){
        return axios.get("http://localhost:8080/api/curriculumVitae/getall")
    }
}