
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '200px',
};

const titleStyle = {
  fontFamily: 'Roboto, sans-serif', 
};

const ProductList = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom style={titleStyle}>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {data.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body1">Price: ${product.price}</Typography>
                <Typography variant="body1">Popularity: {product.popularity}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
