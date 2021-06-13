
import EmployerService from '../services/employerService'
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import React, { useState,useEffect } from "react";


export default function EmployerList() {
    const [employers, setemployers] = useState([])
    useEffect(()=>{
        let employerService=new EmployerService()
        employerService.getEmployers().then(result=>setemployers(result.data.data))
    },[])
    return (
        <div>
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Web Site</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row >
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.phone}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
        </Table>
        </div>
    )
}
