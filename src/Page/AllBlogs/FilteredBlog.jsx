import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";


const FilteredBlog = () => {


    const axiosPublic = useAxiosPublic();

  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all'); // 'all' means no category filter
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    // Fetch blogs from the server
    axiosPublic.get('/blogs')
      .then(response => {
        setBlogs(response.data);
        setFilteredBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, [axiosPublic]);

  useEffect(() => {
    // Apply category filter
    if (categoryFilter === 'all') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => blog.category === categoryFilter);
      setFilteredBlogs(filtered);
    }
  }, [blogs, categoryFilter]);


  useEffect(() => {
    // Apply title search filter
    if (searchTerm.trim() === '') {
      setFilteredBlogs(blogs);
    } else {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const filtered = blogs.filter(blog => blog.title.toLowerCase().includes(lowerSearchTerm));
      setFilteredBlogs(filtered);
    }
  }, [blogs, searchTerm]);

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };


    return (
        <div>

            <div>
      {/* Category Filter */}
      <div className="mt-4">
        <span className="ml-5 "><span className="font-bold mr-3 text-lg underline text-emerald-400"> Filter by Category:  </span></span>

        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('all')}>All</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('lifestyle')}>Lifestyle</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('food')}>Food</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('art')}>Art</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('science')}>Science</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('nature')}>Nature</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('technology')}>Technology</button>
      </div>

      {/* Search Field */}
      <div className="mt-7 text-center">
        <label htmlFor="search"><span className="text-lg font-bold underline mr-4 text-red-400"> Search by Title: </span> </label>
        <input className="input input-bordered input-accent w-full max-w-xs "
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display Blogs */}
      <div className="mt-5 bg-slate-200 text-center ">
        {filteredBlogs.map(blog => (
          <div className="" key={blog._id}>
            <h2 className="mt-5"> <span className="text-xl underline font-bold text-pink-600 ">Title :</span>  <span className="text-lg bg-slate-400 rounded-lg p-2 "> {blog.title}  </span></h2>
            <p className="mt-5">  <span className="font-bold underline  text-fuchsia-600 text-xl "> Category: </span>  <span className="bg-sky-200 text-lg ml-3 p-2 rounded-lg font-bold "> {blog.category}  </span> </p>
            {/* Add other blog details */}
            <Link to={`/blogDetail/${blog._id}`}> <button className="btn btn-link"> <span className="font-bold text-emerald-500 flex gap-5 "> Read More <FaExternalLinkAlt /> </span> </button>  </Link>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default FilteredBlog;