import React from 'react'
import { AppBar, Container, Toolbar, Typography, Grid } from '@material-ui/core'


export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            <Grid container justifyContent="space-between">
              <Grid item xs={6} >
                © 2021 plus Ultra
              </Grid>
              <Grid item xs={6} >
                Email: koja.kairat@gmail.com
              </Grid>
            </Grid>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
