import React, {useEffect, useState} from 'react'
import Loading from './Loading'
import { makeStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gridGap: "0.5rem",
        minHeight: "85vh",
        justifyItems: "center",
        alignItems: "center",
        margin:"0.5em",
        boxSizing:"border-box"
    },
    productDetails: {
        padding: "1em",
        boxSizing:"border-box"
    }
})

const products = {
    pr:{
      title:"Carnival Drink Bottle - 300ml",
      price:9.84,
      id:"DW-7018-BL",
      baseCode:"DW-7018",
      imageUrl:"https://productcatalogue2015.s3.amazonaws.com/DW-7018-BL_460_350.jpg",
      details:"• design registration pending • FDA approved materials"
    },
    pro:{
      title:"Unisex Super Club 135 T-Shirt",
      price:49.489,
      id:"BAS-3000-Y-XL",
      baseCode:"BAS-3000",
      imageUrl:"https://productcatalogue2015.s3.amazonaws.com/BAS-3000-Y_460_350.jpg",
      details:"S - 4XL / 100% polyester pongee bonded with interlock knit padding: 100% polyester  single button cuffs  two hand pockets interior pocket  interior mobile phone pocket  rubber main label hanging loop  opening in lining for access to branding areas"
    },
    prop:{
      title:"Ladies ¾ Sleeve Viscount Shirt",
      price:189.99,
      id:"ALT-VLB-N-3XL",
      baseCode:"ALT-VLB",
      imageUrl:"https://productcatalogue2020.s3.amazonaws.com/ALT-VLB-RB-MOFR_460_350.jpg",
      details:"This classic fitted V-neck Basic T-shirt with its soft feel fabric not only looks great, but is also versatile and can be worn with just about anything for that everyday use. Its design features a V-neck with matching rib neckline. Sizes: Ladies: (XS - 4XL) Can be downsized"
    },
    prop2:{
      title:"Unisex Super Club 165 T-Shirt",
      price:189.99,
      id:"BAS-4770-DG2-5XL",
      baseCode:"BAS-4770",
      imageUrl:"https://productcatalogue2020.s3.amazonaws.com/BAS-4770-L-MOFR09_460_350.jpg",
      details:"S - 5XL / 165 g/m&amp;sup2 / 100% cotton single jersey knit Rib knit collar with double stitching and elastane Tubular knit"
    },
    prop3:{
      title:"Ladies Okapi Knit Jacket",
      price:349.99,
      id:"ELE-7413-BU-XL",
      baseCode:"ELE-7413",
      imageUrl:"https://productcatalogue2020.s3.amazonaws.com/ELE-7413_460_350.jpg",
      details:"S - 4XL • 195 g/m2 • 100% polyester jersey knit with brushed back"
    }
  }

const ProductDetails = ({match}) =>{
    let [id,setId] = useState(null)
    let [key,setKey] = useState(null)
    const classes = useStyles()

    useEffect(()=>{
        setId(match.params.code)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
        Object.keys(products).map((product,index)=>{
            if(products[product].id == id){
                setKey(product)
            }
        })
    },1000)
    },[id])
    
    return(
        key === null ? <Loading/> : <div className={classes.container}>
        <img
            width="300px"
            height="auto"
            title={products[key].title}
            alt={products[key].title}
            src={products[key].imageUrl} />
        
        <div className={classes.productDetails}>
            <h3>{products[key].title}</h3>
            <h2>R {products[key].price}</h2>
            <Divider />
            <div>
                <h3>Product Details:</h3>
                <p>{products[key].details}</p>
                <h3>Available Stock:</h3>
                <p>{`http://services.amrodtoolbox.co.za/StockCSV.aspx?accountNumber=018638&StockCode=${products[key].baseCode}`}</p>
            </div>
        </div>
    </div>
    )
}

export default ProductDetails;