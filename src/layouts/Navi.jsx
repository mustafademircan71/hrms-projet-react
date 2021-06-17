import React from "react";
import { Menu, Segment, Container, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import VerticalMenu from "./VerticalMenu";

export default function Navi() {
  return (
    <div>
      <Menu inverted stackable size="large">
        <Container>
          <Menu.Item>
            {" "}
            <Link to={`/`}>
            <Button color='yellow'>Ana Sayfa</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/`}>
              <Button color="instagram">
                İş İlanları
              </Button>
            </Link>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button>Giriş Yap</Button>
                <Button.Or />
                <Button positive>Kayıt Ol</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
