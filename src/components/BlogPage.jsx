import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12 //blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(()=>{
    async function fetchBlogs(){
      let url = `http://localhost:5173/blogsData.json`;

      //filter by category
      if(selectedCategory){
        url += `&category = ${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
     
      setBlogs(data);
    }
    fetchBlogs();
  },[])

  console.log(blogs);


  return (
    <div>
      {/* category section */}
      <div>Page Category</div>

      {/* blogCards Section */}
      <div>
        <BlogCards blogs={blogs}/>
      </div>

      {/* pagination section */}
      <div>Pagination</div>
    </div>
  )
}

export default BlogPage