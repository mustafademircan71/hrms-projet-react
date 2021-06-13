import React from "react";
import { Menu, Segment,Container,Button } from "semantic-ui-react";
import VerticalMenu from "./VerticalMenu";

export default function Navi() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted >
          
          <Menu.Item > 
            <Button content='Ana Sayfa' primary /> 
          </Menu.Item>
          <Menu.Item >
          
          <Button content='İş İlanları' primary />
          </Menu.Item>
         
          <Menu.Menu position="right">
          <Menu.Item  > <Button content='Giriş Yap' primary /></Menu.Item>
          <Menu.Item  ><Button content='Kayıt Ol' primary /></Menu.Item>
          </Menu.Menu>
          
        </Menu>
      </Segment>
    </div>
  );
}
