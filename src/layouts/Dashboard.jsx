import { Grid } from "semantic-ui-react";
import React from 'react'
import { Route } from "react-router";
import VerticalMenu from "./VerticalMenu";
import JobAdvertList from "../pages/JobAdvertList";
import JobAdvertDetails from "../pages/JobAdvertDetails";
import EmployerList from "../pages/EmployerList";
import JobSeekerList from "../pages/JobSeekerList";
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                <Grid.Column width={4}>
                    <VerticalMenu></VerticalMenu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Route  exact path="/" component={JobAdvertList} />
                    <Route exact path="/jobAdverts/:id" component={JobAdvertDetails}/>
                    <Route exact path="/employers" component={EmployerList}/>
                    <Route path="/jobSeekers" component={JobSeekerList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
        </div>
    )
}


