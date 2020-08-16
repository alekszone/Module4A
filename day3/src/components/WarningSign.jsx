import React,{useState} from 'react'
import {Alert,Button } from 'react-bootstrap'
export default function WarningSign(props) { 
    const [show, setShow] = useState(false);

    
       
        return (
          <>
            <Alert show={show} variant="danger">
              <Alert.Heading>How's it going?!</Alert.Heading>
              <p>
              This is coming from props   {props.title}
              </p>
              <hr />
              <div className="d-flex justify-content-center">
                <Button onClick={() => setShow(false)} variant="outline-success">
                  Close me y'all!
                </Button>
              </div>
            </Alert>
      
            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
          </>
        )
      }
      
    

