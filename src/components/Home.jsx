import { useState } from "react"

const Home = () => {
    const {blogs, setBlogs} = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'My new web', body: 'lorem ipsum...', author: 'msola', id: 2},
        {title: 'My old website', body: 'lorem ipsum...', author: 'toyosi', id: 3},
        {title: 'My new web', body: 'lorem ipsum...', author: 'ade', id: 4}
    ]);
  return (
    <div>
        {blogs.map((blog) => {
          return  <div>
                <h1>{blog.title}</h1>
            </div>
        })}

    </div>
  )
}

export default Home