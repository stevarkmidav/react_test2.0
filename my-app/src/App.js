import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Card sx={{ maxWidth: 345,
                        margin: '0 auto' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5EnJ0lWTyQWtZuDMzUp39niPbgiNNZtHoQ&usqp=CAU"
                  alt="burger"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Burger
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Burger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Order</Button>
                  <Button size="small">Eat now</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
