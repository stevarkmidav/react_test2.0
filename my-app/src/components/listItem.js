import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function ListItem(props) {
  return (
    <Card sx={{ 
      maxWidth: 345,
      margin: '0 auto' }}>
      <CardMedia
        component="img"
        height="180px"
        image={props.img}
        alt="burger"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          Burger
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Eat now</Button>
      </CardActions>
    </Card>
  )
}

