import React,{ Fragment } from "react";
import {CssBaseline, Typography} from '@material-ui/core';

import AppBar from '../appBar';
import "./style.css"

function Page(props){
  const {results}=props;
  const isEmpty= results.length===0;
  return (
      <Fragment>
         <CssBaseline/>
         <AppBar/>
          <div className="results-page">
            {
              isEmpty ? 
              <Typography variant="h5"component="h3" className="page-message">
                No hay Resultados
              </Typography>
              :
                null
            }
          </div>
        
      </Fragment>
  )
}
export default Page;