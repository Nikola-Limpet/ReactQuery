import { useQuery } from "@tanstack/react-query"

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
]
function App() {
  const myPostQuery = useQuery({
    queryKey: ["posts"], // identify the unique name for this query
    queryFn: () => wait(1000).then(() => [...POSTS]) // take a promise function 
  })

  if (myPostQuery.isLoading) return <h1>Loading...</h1>

  return (
    <div>
      {myPostQuery.data.map((post) => {
        return <div key={post.id}>{post.title}</div>
      })}
    </div>
  )
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default App
