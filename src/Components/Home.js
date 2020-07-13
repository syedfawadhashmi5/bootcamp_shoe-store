import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function Home() {
    return (
        <div >
            <div className="home-div">
                <h1><Button className="Button" variant="contained" color="primary">
                    DisCover
            </Button></h1>
            </div>
            <div className="flex">
                <Grid item xs={6} className="div-1">
                    <span className="span-1">
                        <h1><Button variant="contained" color="primary">
                            DisCover
            </Button></h1>JORDAN<br />
NEW ARRIVALS</span>

                </Grid>
                <Grid item xs={6} className="div-2">
                    <span className="span-1"> <h1><Button variant="contained" color="primary">
                        DisCover
            </Button></h1>NIKE<br />
NEW ARRIVALS</span>
                </Grid>
            </div>
        </div>

    )
}


export default Home