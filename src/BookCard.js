import React,{useState} from "react";
import {Card,CardImg,CardBody,CardTitle,Button,Modal} from "reactstrap"
const BookCard =({
    thumbnail,
    pageCount,
    title,
    authors,publisher,
    previewLink,
    infoLink,
    language,
    description

}) =>{
    const [modal,setModal]=useState(false)
    const toggle =() =>setModal(!modal)
   return(
       <Card style={{width:"230px"}} className="n-auto">
       <CardImg top style={{width:"100%",height:"230px"}} src={thumbnail} alt="card Image"/>
       
       <CardBody>
           <CardTitle>{title}</CardTitle>
           <Button onClick={toggle}>More Info</Button>
       </CardBody>
       <Modal isOpen={modal} toggle={toggle} >
          <div className="modal-header justify-content-center">
              <h5 className="modal-title align-items-center"> {title}</h5>
              <Button onClick={toggle}>X</Button>
          </div>
          <div className='body-modal'>
              <div className="d-flex justify-content-between">
                  <img src={thumbnail}  alt={title} style={{height:"230px"}}/>
                  <div>
                       <p>pageCount:{pageCount}</p>
                       <p>author:{authors}</p>
                       <p>publisher:{publisher}</p>
                       <p>language:{language}</p>
                       <p>description:{description}</p>
                  </div>
                    
                        
                  <div className="modal-footer">
                      <div className="left-side">
                          <a 
                          href={previewLink}
                          target="_blank"
                          className="btn-link"
                          type="button"
                          color="default">Preview Link</a>
                      </div>

                  </div>
                  <div className="modal-footer">
                      <div className="right-side">
                          <a 
                          href={infoLink}
                          target="_blank"
                          className="btn-link"
                          type="button"
                          coloe="default">Info Link</a>
                      </div>

                  </div>

              </div>
          </div>
       </Modal>
       </Card>
   )

}


export default BookCard;