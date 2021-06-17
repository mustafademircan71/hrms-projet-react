import { Grid, Container } from "semantic-ui-react";
import React from "react";
import { Route } from "react-router";
import VerticalMenu from "./VerticalMenu";
import JobAdvertList from "../pages/JobAdvertList";
import JobAdvertDetails from "../pages/JobAdvertDetails";
import EmployerList from "../pages/EmployerList";
import JobSeekerList from "../pages/JobSeekerList";
import Navi from "./Navi";
import  "./Dashboard.css";
import CurriculumVitaeList from "../pages/CurriculumVitaeList";
import NewJobAdvert from "../pages/NewJobAdvert";


export default function Dashboard() {
  return (
    <div>

      <Navi />
      <Container className="main" >
        <Grid stackable>
          <Grid.Column width={4}>
            <VerticalMenu />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertList} />
            <Route exact path="/jobAdverts/:id" component={JobAdvertDetails} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/jobSeekers" component={JobSeekerList} />
            <Route exact path="/curriculumVitaes" component={CurriculumVitaeList} />
            <Route exact path="/newJobAdvert" component={NewJobAdvert}/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
