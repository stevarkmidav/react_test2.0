import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem } from './ListItem';

const info = [
  {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5EnJ0lWTyQWtZuDMzUp39niPbgiNNZtHoQ&usqp=CAU',
    description : 'Burger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.'
  },
  {
    id: 2,
    img: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
    description : 'Burger white, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.'
  },
  {
    id: 3,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg',
    description : 'Black burger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.'
  }
]

export function MenuList () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {info.map((data, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ListItem img={data.img} description={data.description}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}