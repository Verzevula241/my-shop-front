import {React} from 'react'
import './Shop.css'
import {NavLink,Route} from 'react-router-dom'
import {connect} from "react-redux"
import {grabItem,modalData,modalToggle} from '../actions/clothesAction'

function Item(props){
    return <div className='container-prod'>
        {
                
        
                 props.product.slice(0,4).map((item,index)=>{
                    
                   return <div className='column-m' key = {index}>
                    <div className="pic-product" style={{backgroundImage: `url(${item.imageUrl})`}} onClick={()=>{props.state.setModal(item);props.state.modalTog()}}/>
                        <div className="info-product" key={index}>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </div>
                    </div>
                })
         
       }         
     
    </div>
}
function Shop (state) {
    
    return <>
        {state.data.map((item,index)=>{
            return <article key={index} className="art">
                <NavLink style={{ textDecoration: 'none' , color: 'black'}} to={{pathname:`/${item.routeName}`,state:{name:item.routeName}}}><h2 style={{paddingLeft: "35px"}}>{item.title}</h2></NavLink>
                <Item product= {item.items} state={state}/>
                </article>
                
        })}
    </>
}
function mapStateToProps(state){
    return{
        data: state.cloathesReducer.clothes
    }
  }
function mapDispatchToProps(dispatch){
return{
    getItem: route => {dispatch(grabItem(route))},
    setModal: data => {dispatch(modalData(data))},
    modalTog: ()=> {dispatch(modalToggle())},
}
}
  export default connect(mapStateToProps,mapDispatchToProps)(Shop); 