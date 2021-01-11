import React from 'react'
import Tour from './tour'
const Tours = ({tours,removeItem}) =>{
    return <section>
        <div className='title'>
             <h1>our Tours</h1>
            <div className='underline'></div>
        </div>
           
        <div>
            {
                 tours.map((tour) =>{
                     return <Tour key={tour.id} {...tour} removeItem={removeItem}></Tour>
                 })
             }
        </div>
    </section>
}
export default Tours