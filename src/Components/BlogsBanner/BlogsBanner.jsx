import React from 'react';
import './BlogsBanner.css';

const blogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    description: 'React Hooks are functions that let you use state and other React features in function components. With Hooks, you can handle side effects, local component state, and more without using class-based components. Hooks like useState, useEffect, and useContext provide a powerful way to build reusable logic in React components.'
  },
  {
    id: 2,
    title: 'CSS Flexbox vs Grid',
    description: 'CSS provides powerful layout tools like Flexbox and Grid, which are ideal for building modern web layouts. While Flexbox is one-dimensional and useful for aligning items along one axis, Grid is two-dimensional and helps you lay out items in rows and columns. Both of these tools have their unique use cases in modern responsive design.'
  },
  {
    id: 3,
    title: 'JavaScript ES6 Features',
    description: 'JavaScript ES6 introduced several new features to the language, including arrow functions, destructuring, template literals, and promises. These features improve code readability, reduce boilerplate, and provide new ways to handle asynchronous programming, making JavaScript more powerful and concise for developers.'
  },
  {
    id: 4,
    title: 'Benefits of TypeScript',
    description: 'TypeScript is a superset of JavaScript that adds optional static types. By using TypeScript, developers can catch errors early during development, leading to more reliable and maintainable codebases. TypeScript is especially useful in larger applications, where complex types and interfaces are common, helping developers scale their applications more effectively.'
  }
];

const Blog = () => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <div className="blog-container">
      <h2 className="blog-heading">Latest Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{truncateText(blog.description, 30)}</p>
            <div className="blog-actions">
              <button className="like-button">Like</button>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All</button>
    </div>
  );
};

export default Blog;
