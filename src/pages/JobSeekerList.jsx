
import React, { useState,useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import JobSeekerService from '../services/jobSeekerService'

export default function JobSeekerList() {
    const [jobSeekers, setjobSeekers] = useState([])
    useEffect(()=>{
        let jobSeekerService=new JobSeekerService()
        jobSeekerService.getJobSeeker().then(result=>setjobSeekers(result.data.data))
    },[])
    return (
        
        <div>
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Adı Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Kimlik Numarası</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.firstName +" "+jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.identityNo}</Table.Cell>
              <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
             
            </Table.Row>
          ))}
        </Table.Body>
        </Table>
        </div>
    )
}
