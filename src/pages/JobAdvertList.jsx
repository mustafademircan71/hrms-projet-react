import { Link } from "react-router-dom";
import {  Table,Button } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";
import React, { useState,useEffect } from "react";



export default function JobAdvertList() {
    const [jobAdverts, setjobAdverts] = useState([])
    useEffect(()=>{
        let jobAdvertService=new JobAdvertService()
        jobAdvertService.getJobadverts().then(result=>setjobAdverts(result.data.data))
    },[])
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan Adı</Table.HeaderCell>
            <Table.HeaderCell>Firma</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İlan Detayı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
      <Table.Body>
      {jobAdverts.map((jobAdvert) => (
        <Table.Row >
          <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
          <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
          <Table.Cell>{jobAdvert.deadlineDate}</Table.Cell>
          <Table.Cell>{jobAdvert.openPostion}</Table.Cell>
          <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
          <Table.Cell><Link to={`/jobAdverts/${jobAdvert.id}`}><Button content='Detay' primary /></Link></Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
      </Table>
    </div>
  );
}
