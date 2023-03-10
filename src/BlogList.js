import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {


    return (  
        
        <div className="blog-list">
        <h2 className="blog-header">{ title }</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link className="blog-preview a" to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </Link>
            </div>
        ))} 
        </div>
    );
}
 
export default BlogList;