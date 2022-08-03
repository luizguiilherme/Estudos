import React, { useMemo } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";


export default function Post(){
  const params = useParams();
  const {serach} = useLocation();
  const history = useHistory();

  const queryParams = useMemo(() => new URLSearchParams(serach), [serach]) 

  function handleNavigate() {
    history.push('/posts')
  }

 

  return (
    <>
    <button onClick={handleNavigate}>Voltar para lista de posts</button>
    <h1>Post Page</h1>
    </>
  )
}