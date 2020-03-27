import React, { useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
  spacer: {
    height: 65,
  },
  card: {
    boxSizing: "border-box",
    border: "2px solid rgba(0,0,0,0)",
    '&:hover': {
      cursor: "pointer",
      border: "2px solid black",
    },
    maxWidth: 200,
  },
});

const App = () => {
  const handleItemClick = () =>{
    console.log("item was clicked")
  }
  
  let classes = useStyles()

  return (

    <div className="App">
      <Card className={classes.card} onClick={() => { handleItemClick("ALT-VLB-N-3XL") }}>
        <CardActionArea className="cardImage">
          <CardMedia component="img" height="auto" title="ALT-VLB-RB-MOFR" image={`https://productcatalogue2020.s3.amazonaws.com/ALT-VLB-RB-MOFR_460_350.jpg`} />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ladies ¾ Sleeve Viscount Shirt
      </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R 189.99
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
