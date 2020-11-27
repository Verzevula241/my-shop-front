import {React,useState, useEffect} from 'react'
import './ItemPage.css'
import {connect} from "react-redux"
import {useLocation} from 'react-router-dom'
import {grabItem} from '../actions/clothesAction'
import axios from 'axios';
 
function ItemPage(state) {
  const [data, setData] = useState({ items: [] });
 let location = useLocation();
 let routeName = location.pathname

  useEffect(() => {
    
      console.log(location)
    const fetchData = async (name) => {
      const result = await axios(
        `http://localhost:8080/api/item${name}`,
      );
 
      setData(result.data.data);
    };
 
    fetchData(routeName);
  }, []);
 
  return (
<article>
    <div className="container-item">
      {data.items.map((item,index) => (
        <div className='column-medium' key = {index}>
        <div className="pic-product" style={{backgroundImage: `url(${item.imageUrl})`}}/>
            <div className="info-product" key={index}>
                <span>{item.name}</span>
                <span>{item.price}</span>
            </div>
        </div>
      ))}</div>
</article>
  );
}


function mapStateToProps(state){
    return{
        data: state.cloathesReducer.dataClothes
    }
  }
function mapDispatchToProps(dispatch){
return{
    getItem: route => {dispatch(grabItem(route))}
}
}
  export default connect(mapStateToProps,mapDispatchToProps)(ItemPage); 