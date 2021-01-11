import React from 'react'
import Loading from './loading'
import Tours from './tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading]=React.useState(true)
  const [tours,setTours]=React.useState([])
  const removeItem = (id) =>{
    const newList=tours.filter((tour) => tour.id !==id)
    setTours(newList)
  }
  const fetchTours   = async () =>{
    setLoading(true)
    try{
      const res= await fetch(url)
      const toursjson= await res.json()
      setLoading(false)
      setTours(toursjson)
    }catch(error){
      setLoading(false)
    }
   
  }
  React.useEffect(() =>{
    fetchTours()
  },[])
  if(loading) {
       return <main><Loading></Loading>  </main>
  }
  if(tours.length === 0 ){
    return  <main>
       <div className='title'>
         <h1>our Tours</h1>
        <button className='btn' onClick={fetchTours}>Refrech</button>
       </div>
     </main>
  }
  return (
     <main>
           <Tours tours={tours} removeItem={removeItem} ></Tours>   
  
     </main>
  )
            
}

export default App;
