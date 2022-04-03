import React from 'react'
import { useRouter } from "next/router";

const Docs = () => {
    const router=useRouter();
    const {params=[]}=router.query
    console.log(params)
    if(params.length==2){
        return(<h2>Viewing docs for feature {params[0]} and concept {params[1]}</h2>);
    }
  return (
    <h1>Inside Catch all routes</h1>
  )
}

export default Docs