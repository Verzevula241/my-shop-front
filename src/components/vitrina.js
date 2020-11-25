import {React} from 'react'
import './Vitrina.css'
import {NavLink,Route,Redirect} from 'react-router-dom'


function vitrina (state) {

    return (
        <div className='container'>
            <div className='container'>
                {
                    
            state.data.slice(0, 3).map((item, index) => {
                    return  <div  key={index} className="column-small" style={{backgroundImage: `url(${item.items[0].imageUrl})`}}>
                    <button className="categories-button">
                        <NavLink style={{ textDecoration: 'none' , color: 'black'}} to={`/${item.routeName}`}>
                            <span className='title-sale'>{item.title}</span>
                            <br/>SHOP NOW
                        </NavLink>
                    </button>
                    </div>
                    }
                )
                }
            </div>
            <div className='container' style={{borderSpacing: '16px'}}>
                {
                    state.data.slice(3,5).map((item, index) => {

                        return  <div  key={index} className="column-big" style={{backgroundImage: `url(${item.items[0].imageUrl})`}}>
                        <button className="categories-button">
                            <NavLink style={{ textDecoration: 'none' , color: 'black'}} to={`/${item.routeName}`}>
                                <span className='title-sale'>{item.title}</span>
                                <br/>SHOP NOW
                            </NavLink>
                        </button>
                        </div>

                    })
                }
            
            </div>

        </div>
      );

}


export default vitrina 