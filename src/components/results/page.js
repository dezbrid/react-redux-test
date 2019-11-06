import React,{ Fragment } from "react";
import {CssBaseline, Typography,Card,CardActionArea,CardContent,CardMedia} from '@material-ui/core';

import AppBar from '../appBar';
import "./style.css"

function Page(props){
  const {results,goTo}=props;
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
                results.map(item =>
                  <div
                      key={item.id}
                      className="card-container"
                  >
                      <Card 
                          className="card"
                          onClick={()=> goTo (`/details/${item.id}`)}
                      >
                          <CardActionArea>
                              <CardMedia
                                  className="card-media"
                                  image={item.image}
                                  title={item.title}
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component= "h2">
                                      {item.title}
                                  </Typography>
                                  <Typography component="p" >
                                    {item.content}
                                  </Typography>
                              </CardContent>
                          </CardActionArea>
                        
                      </Card>

                  </div>
                  )
            }
          </div>
        
      </Fragment>
  )
}
export default Page;