import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon, Input, Menu, Label } from "semantic-ui-react";

export default function VerticalMenu() {
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical size="large" >
        
        <Menu.Item>
          <Icon name="address book outline"/>
          
          <Link to={`employers/`}>İşveren Listesi</Link>
        </Menu.Item>

        <Menu.Item name="Yeni Cv Oluştur">
        
        <Icon name="columns"/>
          <Link to={`jobSeekers/`}>İş Arayan Listesi</Link>
        </Menu.Item>

        <Menu.Item>
        
        <Icon name="file alternate"/>
          <Link to={`curriculumVitaes/`}>Cv Güncelle</Link>
        </Menu.Item>
        <Menu.Item>
        
        <Icon name="edit"/>
          <Link to={`newJobAdvert/`}>İlan Ekle</Link>
        </Menu.Item>
        
      </Menu>
    </div>
  );
}
