import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => (
  
  <>
    <Typography variant="h6" gutterBottom>Барлығы</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Саны: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.raw} $</Typography>
        </ListItem>
      ))}
      
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Салық" secondary="for KZ" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.raw*0.21} $<br/>
          for KZ 0$
        </Typography>
      </ListItem>
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Барлығы" secondary="for KZ " />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.raw+ checkoutToken.live.subtotal.raw*0.21} $ <br />
          {checkoutToken.live.subtotal.raw} $
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;
