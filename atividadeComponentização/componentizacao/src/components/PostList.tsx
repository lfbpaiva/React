import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem('posts');
    if (cached) {
      setPosts(JSON.parse(cached));
      setLoading(false);
      console.log('Dados carregados do cache');
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data: Post[]) => {
          setPosts(data);
          localStorage.setItem('posts', JSON.stringify(data));
          setLoading(false);
          console.log('📡 Dados carregados da API e salvos no cache');
        })
        .catch((err) => {
          console.error('Erro ao buscar dados:', err);
          setLoading(false);
        });
    }

    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  return (
    <div className="post-list">
      <h2>Postagens</h2>
      {loading ? (
        <p> Carregando posts...</p>
      ) : (
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}