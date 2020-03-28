import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "1rem",
    width: "100%",
    minHeight: "100vh",
    padding: "1.5rem",
    boxSizing: "border-box",
  },
  spacer: {
    height: 65,
  },
  card: {
    boxSizing: "border-box",
    borderRadius:"0px",
    border: "2px solid rgba(0,0,0,0)",
    '&:hover': {
      cursor: "pointer",
      border: "2px solid blue",
    },
    maxWidth: 200,
  },
});

const ProductDisplay = ({history}) => {
    const handleItemClick = (id) =>{
        history.push(`/ProductDetails/${id}`)
      }
      const products = {
        pr:{
          title:"Carnival Drink Bottle - 300ml",
          price:9.84,
          id:"DW-7018-BL",
          baseCode:"DW-7018",
          imageUrl:"https://productcatalogue2015.s3.amazonaws.com/DW-7018-BL_460_350.jpg",
        },
        pro:{
          title:"Unisex Super Club 135 T-Shirt",
          price:49.489,
          id:"BAS-3000-Y-XL",
          baseCode:"BAS-3000",
          imageUrl:"https://productcatalogue2015.s3.amazonaws.com/BAS-3000-Y_460_350.jpg",
        },
        prop:{
          title:"Ladies ¾ Sleeve Viscount Shirt",
          price:189.99,
          id:"ALT-VLB-N-3XL",
          baseCode:"ALT-VLB",
          imageUrl:"https://productcatalogue2020.s3.amazonaws.com/ALT-VLB-RB-MOFR_460_350.jpg"
        },
        prop2:{
          title:"Unisex Super Club 165 T-Shirt",
          price:189.99,
          id:"BAS-4770-DG2-5XL",
          baseCode:"BAS-4770",
          imageUrl:"https://productcatalogue2020.s3.amazonaws.com/BAS-4770-L-MOFR09_460_350.jpg"
        },
        prop3:{
          title:"Ladies Okapi Knit Jacket",
          price:349.99,
          id:"ELE-7413-BU-XL",
          baseCode:"ELE-7413",
          imageUrl:"https://productcatalogue2020.s3.amazonaws.com/ELE-7413_460_350.jpg"
        }
      }
      let classes = useStyles()
    
      return (
        <div className={classes.container}>
          {Object.keys(products).map((product,key)=>{
            return(
              <Card key={products[product].id} className={classes.card} onClick={() => { handleItemClick(products[product].id) }}>
            <CardActionArea className="cardImage">
              <CardMedia component="img" height="auto" title={products[product].title} image={products[product].imageUrl} />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {products[product].title}
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                R {products[product].price}
              </Typography>
            </CardContent>
          </Card>
            )
          })}
        </div>
      );
}

export default withRouter(ProductDisplay)