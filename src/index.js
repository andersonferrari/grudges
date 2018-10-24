import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';
import Amplify from 'aws-amplify';
import configuration from './aws-exports';

const awsmobile =  {
  "aws_appsync_graphqlEndpoint": "https://2wox2esuu5gxvatzfwpvbdqcku.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-6ciwvumhizhabdstmn57calgfi",
};

Amplify.configure({ ...configuration, ...awsmobile} );

ReactDOM.render(<Application />, document.getElementById('root'));
