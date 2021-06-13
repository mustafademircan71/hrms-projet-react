import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon, Input, Menu,Label } from 'semantic-ui-react'

export default function VerticalMenu() {
  return (
    <div>
           <Menu size='massive' vertical>
           <Menu.Item>
          <Input icon='search' placeholder='İlan Ara' />
        </Menu.Item>
        <Menu.Item ><Link to={`employers/`}>İşveren Listesi</Link></Menu.Item>

        <Menu.Item name='Yeni Cv Oluştur'><Link to={`jobSeekers/`}>İş Arayan Listesi</Link></Menu.Item>

        <Menu.Item
          name='Cv Güncelle'
       
        >
         
          Cv Güncelle
        </Menu.Item>
      
      </Menu>
    </div>
  );
}
