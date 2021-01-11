import React from 'react'

const Tour= ({id,name,info,image,price,removeItem}) =>{
    const [readMore,SetReadMore]=React.useState(false)
    return <>
        <article className="single-tour">
        <div>
                 <img src={image} alt={name}></img>
                 <footer>
                     <div className="tour-info">
                         <h3>{name}</h3>
                         <h3 className="tour-price">${price}</h3>
                     </div>
                     <p>
                            {readMore? info : `${info.substring(0,200)}`}
                            <button onClick={() =>SetReadMore(!readMore)}>
                                {readMore? 'read less' : 'read more'}
                            </button>
                         
                         </p>
                     <button className="delete-btn" onClick={() =>removeItem(id)}>Not interested</button>
                     
                 </footer>
        </div>
        </article>
             
        
    </>
}
export default Tour