import {React} from 'react'

function vitrina (state) {

    return (
        <div>
            {
                
          state.data.map((item, index) => {
                    
          return <div key={index}>
          <img src={item.items[0].imageUrl} alt='sdf'/>
          <p>{item.title}</p>
          </div>

                }
            )
            }
        </div>
      );

}


export default vitrina 