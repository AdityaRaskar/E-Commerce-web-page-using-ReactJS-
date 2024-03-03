import { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import Products from './components/Products';
import image from './images/try.jpg';
import axios from 'axios';
import Header from './components/Header';


// require.context('./images',true,/\.jpg$/)
function App() {
  let [finalcategory,setfinalcategory]=useState([])
  let [finalprod,setfinalprod]=useState([])
  let [catName,setcatName]=useState("")

  let getCategory=()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then((res)=>res.data)
    .then((finalres)=>{
      setfinalcategory(finalres);
    })
  }

  let getProducts=()=>{
    axios.get("https://dummyjson.com/products")
    .then((proRes)=>proRes.data)
    .then((finalprod)=>{
      setfinalprod(finalprod.products)
    })
  }

  useEffect(()=>{
    getCategory();
    getProducts();
  },[])

  useEffect(()=>{
    if(catName!==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes)=>proRes.data)
      .then((finalres)=>{
        setfinalprod(finalres.products);
      })
    }
  },[catName])



  let pItems=finalprod.map((products,i)=>{

    return(
      <ProductItem key={i} pdata={products}/>
    )
  })


  return (
    <>
    <Header/>
    <div className="py-[40px] ">
      <div className="max-w-[90vw] mx-auto">
        <h1 className='text-center text-[40px] font-bold mb-[25px]'>Our products</h1>
        <div className="grid grid-cols-[30%_auto] gap-[20px]">
          <div>
            <Category finalcategory={finalcategory} setcatName={setcatName}/>   
          </div>

          <div >
            <div className="grid grid-cols-3 gap-5 ">
              {finalprod.length >=1 ?
              pItems
            :
            "No product found"}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>


  );
}

export default App;



export function ProductItem({pdata}) {
  return(
    
  <div className="shadow-lg text-center pb">
                <img src={pdata.thumbnail} className='w-[100%] h-[220px]' alt="try" />
                <h4>{pdata.title}</h4>
                <b>{pdata.price}</b>

              </div>
  )
}