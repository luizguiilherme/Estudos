import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
  {title: 'Title#01', subtitle: 'Sub#01', likes: 20},
  {title: 'Title#02', subtitle: 'Sub#02', likes: 10},
  {title: 'Title#03', subtitle: 'Sub#02', likes: 50},
]

// Render -> Renderizar
// Props -> Propriedades
function App(){
  return (
    // Formas de usar o react Fragments(<React.Fragments></React.Fragments>, <Fragments></Fragments> ou <></>)
    <>
      
      <Header>
        <h2>Posts da semana</h2>
      </ Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          likes ={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}

      {/* <Post 
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
       */}
     
    </>
  );
}

export default App;