import React from 'react';
import ErrorBoundary from "../ErrorBoundary";
import {StarshipList} from "../SWComponents";
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({history}) => {
    return(
        <ErrorBoundary>
            <StarshipList onItemSelected={(id) =>  history.push(id)}/>
        </ErrorBoundary>
    )
};

export default withRouter(StarshipsPage);