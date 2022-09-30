import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const info = [
  {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5EnJ0lWTyQWtZuDMzUp39niPbgiNNZtHoQ&usqp=CAU',
    description : 'Burger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.'
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5EnJ0lWTyQWtZuDMzUp39niPbgiNNZtHoQ&usqp=CAU',
    description : 'Burger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.'
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5EnJ0lWTyQWtZuDMzUp39niPbgiNNZtHoQ&usqp=CAU',
    description : 'Burger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.'
  }
]

export function listItem() {
  return (
    <Card sx={{ 
      maxWidth: 345,
      margin: '0 auto' }}>
      <CardMedia
        component="img"
        height="100%"
        image=""
        alt="burger"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Burger
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Eat now</Button>
      </CardActions>
    </Card>
  )
}

