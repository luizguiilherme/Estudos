import React, {useState} from "react";
import Post from "./Post";
import Header from "./Header";



// Render -> Renderizar
// Props -> Propriedades
function App(){
  const [posts, setPosts] = useState([
    {id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false},
    {id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true},
    {id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false},
    {id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50, read: true},
  ]);

  function handleRefresh(){
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
       { 
        id: Math.random(), 
        title: `Title#0${prevState.length + 1}`, 
        subtitle: `Sub#0${prevState.length + 1}`, 
        likes: 50
       },
      ]);
    }, 2000)
  }

  function handleRemovePost(postId){
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
      
    ));

  }
  return (
    // Formas de usar o react Fragments(<React.Fragments></React.Fragments>, <Fragments></Fragments> ou <></>)
    <>
      
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh} >Atualizar</button>
          </h2>
      </ Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes ={post.likes}
          onRemove={handleRemovePost}
          post={post}
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