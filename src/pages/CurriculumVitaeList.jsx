
import { Button,Table,Menu,Icon } from "semantic-ui-react";
import React, { useState, useEffect } from "react";

import CurriclumVitaeService from "../services/curriculumVitaeService";

export default function CurriculumVitaeList() {
  const [curriculumVitaes, setcurriculumVitaes] = useState([]);
  useEffect(() => {
    let curriculumVitaesService = new CurriclumVitaeService();
    curriculumVitaesService
      .getCurriclumVitae().then((result) => setcurriculumVitaes(result.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Adı Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Github Adresi</Table.HeaderCell>
            <Table.HeaderCell>Linkedin Adresi</Table.HeaderCell>
            <Table.HeaderCell>Detay</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {curriculumVitaes.map((curriculumVitae) => (
            <Table.Row>
              <Table.Cell>{curriculumVitae.jobSeeker.email}</Table.Cell>
              <Table.Cell>{curriculumVitae.jobSeeker.firstName+" "+curriculumVitae.jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{curriculumVitae.gitHubAddress}</Table.Cell>
              <Table.Cell>{curriculumVitae.linkedinAddress}</Table.Cell>
              <Table.Cell><Button content='Detay' primary /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
