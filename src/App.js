


import React,{useState} from 'react';
import {InputGroup,Input,FormGroup,Label, InputGroupAddon, Button,Spinner} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import './App.css';
import BookCard from "./BookCard.js";
function App(){
  const[maxResults,setMaxResults]=useState([]);
  const[query,setQuery]=useState("")
  const[loading,setLoading]=useState(false)
  const[cards,setCards]=useState([])
  const handleSubmit= (e) => {
       setLoading(true)
       if(maxResults > 40 || maxResults < 1){
          toast.error("max results must between 1 and 40")
       }else{
         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResulys=${maxResults}`
         ).then(res =>{
           if(res.data.items.length>1){
             setCards(res.data.items)
             setLoading(false)
           }
           console.log(res.data)
         }).catch(error => {
           setLoading(true)
           toast.error(`${error.response.data.error.message}`)
         })
       }
  }
  const mainHeader = () => {
    return(
      <div className='a'>
        
        <h1 className="b"style={{zIndex:2}}>Google Books</h1>
            <div className="c" style={{width:"60%"}}> 
            <InputGroup size="lg">
                    <Input placeholder="Book Search" value={query} onChange={e =>setQuery(e.target.value)} />
                    <InputGroupAddon addonType="append">
                       <Button onClick={handleSubmit} >
                         <i className="fas fa-search"></i>
                       </Button>
                    </InputGroupAddon>
                </InputGroup>
                </div>
                <div className="d " style={{width:"5%"}}>
                   <FormGroup className="e">
                       <Label for="maxResults">Max Results</Label>
                       <Input type="number" placeholder="Max Results" value={maxResults} onChange={e =>setMaxResults(e.target.value)} />
                   </FormGroup>
                   
                
                
                
            </div>
      </div>
    )
   
  }
 const handleCards = () =>{
   console.log(cards)
   const items=cards.map((item,i)=>{
     let thumbnail="";
     if(item.volumeInfo.imageLinks.thumbnail){
       thumbnail=item.volumeInfo.imageLinks.thumbnail
     }
     return(
       <div className="col-lg-4">
          <BookCard 
          thumbnail={thumbnail}
          title={item.volumeInfo.title} 
          pageCount={item.volumeInfo.pageCount} 
          language={item.volumeInfo.language} 
          authors={item.volumeInfo.authors} 
          publisher={item.volumeInfo.publisher} 
          description={item.volumeInfo.description} 
          previewLink={item.volumeInfo.previewLink} 
          infoLink={item.volumeInfo.infoLink} />
       </div>
     )
   })
   if(loading){
     return(
       <div className="f">
          <Spinner  style={{ width:'3rem',height:'3rem'}}/>
       </div>
     )
   }else{
     return(
       <div className="container my-5">
       <div className="row"> 
           {items}

       </div>
       </div>
     )
   }
 }


  return(
    <div >
      {mainHeader()}
      <ToastContainer />
      {handleCards()}
      
    </div>
  )
}


export default App;


