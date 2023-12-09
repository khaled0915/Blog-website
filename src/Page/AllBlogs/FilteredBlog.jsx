import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


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
      <div>
        <span className="ml-5 ">Filter by Category: </span>

        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('all')}>All</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('lifestyle')}>Lifestyle</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('food')}>Food</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('art')}>Art</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('science')}>Science</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('nature')}>Nature</button>
        <button className="btn pl-3 mr-3 " onClick={() => handleCategoryChange('technology')}>Technology</button>
      </div>

      {/* Search Field */}
      <div>
        <label htmlFor="search">Search by Title: </label>
        <input className="input input-bordered input-accent w-full max-w-xs "
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display Blogs */}
      <div>
        {filteredBlogs.map(blog => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.category}</p>
            {/* Add other blog details */}
            <Link to={`/blogDetail/${blog._id}`}> <button className="btn btn-link"> Read More </button>  </Link>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default FilteredBlog;