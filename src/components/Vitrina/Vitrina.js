import {React} from 'react'
import './Vitrina.css'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux"
import {grabItem} from '../../actions/clothesAction'


function vitrina (state) {

    return (
        <div className='container'>
            <div className='container'>
                {
                    
            state.data.slice(0, 3).map((item, index) => {
                    return  <div  key={index} className="column-small" style={{backgroundImage: `url(${item.items[0].imageUrl})`}}>
                    <NavLink style={{ textDecoration: 'none' , color: 'black'}} to={{pathname:`/${item.routeName}`,state:{name:item.routeName}}}>
                    <button className="categories-button">
                            <span className='title-sale'>{item.title}</span>
                            <br/>SHOP NOW
                    </button>        
                        </NavLink>
                    </div>
                    }
                )
                }
            </div>
            <div className='container' style={{borderSpacing: '16px'}}>
                {
                    state.data.slice(3,5).map((item, index) => {

                        return  <div  key={index} className="column-big" style={{backgroundImage: `url(${item.items[0].imageUrl})`}}>
                    <NavLink style={{ textDecoration: 'none' , color: 'black'}} to={{pathname:`/${item.routeName}`,state:{name:item.routeName}}}>
                    <button className="categories-button">
                            <span className='title-sale'>{item.title}</span>
                            <br/>SHOP NOW
                    </button>        
                        </NavLink>
                    </div>

                    })
                }
            
            </div>
        </div>
      );

}

function mapStateToProps(state){
    return{
        data: state.cloathesReducer.clothes,
        items: state.cloathesReducer.dataClothes
    }
  }
  function mapDispatchToProps(dispatch){
    return{
        getItem: route => {dispatch(grabItem(route))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(vitrina); 