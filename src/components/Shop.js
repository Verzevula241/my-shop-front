import {React} from 'react'
import './Shop.css'
import {NavLink,Route} from 'react-router-dom'
import {connect} from "react-redux"
import {grabItem} from '../actions/clothesAction'

function Item(props){
    return <div className='container-prod'>
        {
                
        
                 props.product.slice(0,4).map((item,index)=>{
                    
                   return <div className='column-medium' key = {index}>
                    <div className="pic-product" style={{backgroundImage: `url(${item.imageUrl})`}}/>
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
            return <article key={index}>
                <h2 style={{paddingLeft: "35px"}}>{item.title}</h2>
                <Item product= {item.items}/>
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
    getItem: route => {dispatch(grabItem(route))}
}
}
  export default connect(mapStateToProps,mapDispatchToProps)(Shop); 