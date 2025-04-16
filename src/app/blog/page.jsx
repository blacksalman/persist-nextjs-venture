// app/blog/page.jsx
'use client'; // Required for useRouter hook
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '../footer/page';
import Navbar from '../components/Navbar';

export default function Blog() {
  const router = useRouter();

  // Sample blog posts (replace with real data and images)
  const blogPosts = [
    {
      title: 'Top 10 Coding Tips for 2025',
      excerpt: 'Discover the essential coding tips that will help developers stay ahead in 2025, from mastering new frameworks to optimizing performance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      date: 'April 10, 2025',
    },
    {
      title: 'How to Ace Your Next Tech Interview',
      excerpt: 'Learn proven strategies to prepare for technical interviews, including problem-solving techniques and common questions asked by top companies.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      date: 'April 12, 2025',
    },
    {
      title: 'The Future of Remote Work in Tech',
      excerpt: 'Explore how remote work is shaping the tech industry, with insights on tools, collaboration, and career growth opportunities.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      date: 'April 14, 2025',
    },
    {
      title: 'Best Practices for Code Reviews',
      excerpt: 'Improve your team’s code quality with these best practices for effective and constructive code reviews.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      date: 'April 15, 2025',
    },
  ];

  return (
    <>
    <Navbar isScrolled={false} />
    <div className="min-h-screen text-white py-20 px-5 mt-5">
      <div className="max-w-[1500px] mx-auto">
        <h1 className="text-[3.5rem] font-medium text-center mb-12">Our Blog</h1>
        <p className="text-[1.2rem] text-[rgba(255,255,255,0.7)] text-center mb-10 max-w-[800px] mx-auto leading-[1.6]">
          Stay updated with the latest insights, tips, and trends in the tech world. Our blog is designed to empower developers and companies with valuable knowledge!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mb-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <div className="relative w-full h-48 overflow-hidden rounded-[24px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-[1.5rem] font-medium mt-5">{post.title}</h3>
              <p className="text-[0.9rem] text-[rgba(255,255,255,0.6)] mb-2">{post.date}</p>
              <p className="text-[1rem] text-[rgba(255,255,255,0.7)] max-w-[300px] leading-[1.5]">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}