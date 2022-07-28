import React from "react";
import Post from "./Post";
import Header from "./Header";

// Render -> Renderizar
// Props -> Propriedades
function App(){
  return (
    // Formas de usar o react Fragments(<React.Fragments></React.Fragments>, <Fragments></Fragments> ou <></>)
    <>
      
      <Header title="Blog do JStack" >
        <h2>Posts da semana</h2>
      </ Header>
      <hr />

      <Post 
        likes = {20}
        post={{
          title: "Título da Notícia 01", subtitle:"Subtítulo da notícia 01",
        }}
      />
      <Post 
        likes={10}
        post={{
          title: "Título da Notícia 02", subtitle:"Subtítulo da notícia 02",
        }}
      />
      <Post 
        likes={50}
        post={{
          title: "Título da Notícia 03", subtitle:"Subtítulo da notícia 03",
        }}
      />
      
     
    </>
  );
}

export default App;