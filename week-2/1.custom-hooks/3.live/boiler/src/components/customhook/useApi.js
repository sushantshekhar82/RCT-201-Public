import React,{useState} from 'react'
import { useEffect } from 'react';

const useApi = (apiFn) => {
    const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]); 
  const [error,setError]=useState(false)
  const execute=async ()=>{
      try{
          setLoading(true)
          let data=await apiFn();
          setData(data)
          setSuccess(true)
      }
      catch(e){
        setError(true);
        setSuccess(false)
      }
      finally{
          setLoading(false)
      }
  }
  useEffect(()=>{
   execute();
  },[])
  
    return (
        {loading,success,data,execute,error,setData}
    )
}

export default useApi
