import React from 'react';
import {PersonDetails, PersonList} from "../SWComponents";
import Row from "../Row";
import ErrorBoundary from "../ErrorBoundary";
import { withRouter } from 'react-router-dom';

import './PeoplePage.css';

const PeoplePage = ({history, match}) => {
    return(
        <ErrorBoundary>
            <Row left={<PersonList onItemSelected={(id) => history.push(id)}/>}
                 right={<PersonDetails itemId={match.params.id}/>}
            />
        </ErrorBoundary>
    );
};

export default withRouter(PeoplePage)