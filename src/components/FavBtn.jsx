import { useState } from 'react'
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
  listLength: state.list.fav.length,
  
})


const mapDispatchToProps = dispatch => ({
 
})

const FavBtn = ({ history, listLength}) => {

//   const [name, setName] = useState('')

  return (
    <div className="ml-auto mt-2">
      {
        // userName ?
         (
          <Button color="primary" onClick={() => history.push("/favorites")}>
            <FaShoppingCart />
            <span className="ml-2"> {listLength}</span>
          </Button>
        ) 
        
        //: 
        (
        //   <FormControl 
        //     placeholder="Insert a username"
        //     value={name}
        //     onChange={e => setName(e.target.value)}
        //     onKeyDown={e => {
        //       if (e.key === 'Enter') {
        //         console.log('sending the username...')
        //         setUsername(name)
        //       }
        //     }}
        //   />
        )
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FavBtn));

