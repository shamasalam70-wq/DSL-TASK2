import React from 'react';
import blogsData from '../data/blogs.json';
import { Calendar, User, Tag, Share2 } from 'lucide-react';

const Blog: React.FC = () => {
  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: 'var(--cream)',
    },
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '40px',
      marginTop: '40px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease',
      display: 'flex',
      flexDirection: 'column' as const,
      border: '1px solid rgba(109, 76, 65, 0.1)',
    },
    cardContent: {
      padding: '25px',
      display: 'flex',
      flexDirection: 'column' as const,
      flex: 1,
    },
    tag: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '0.8rem',
      fontWeight: '600',
      color: 'var(--primary-green)',
      textTransform: 'uppercase' as const,
      marginBottom: '10px',
    },
    title: {
      fontSize: '1.4rem',
      marginBottom: '15px',
      color: 'var(--primary-brown)',
      lineHeight: '1.4',
    },
    summary: {
      fontSize: '0.95rem',
      color: 'var(--text-light)',
      marginBottom: '20px',
      flex: 1,
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '0.85rem',
      color: 'var(--light-brown)',
      borderTop: '1px solid #f0f0f0',
      paddingTop: '15px',
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    share: {
      marginLeft: 'auto',
      cursor: 'pointer',
      color: 'var(--primary-green)',
    }
  };

  return (
    <section id="blog" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Latest from the <span>Blog</span></h2>
        <div style={styles.blogGrid}>
          {blogsData.map((blog) => (
            <div key={blog.id} style={styles.card} className="blog-card">
              <div style={styles.cardContent}>
                <span style={styles.tag}><Tag size={14} /> {blog.category}</span>
                <h3 style={styles.title}>{blog.title}</h3>
                <p style={styles.summary}>{blog.summary}</p>
                <div style={styles.meta}>
                  <div style={styles.metaItem}><Calendar size={14} /> {new Date(blog.date).toLocaleDateString()}</div>
                  <div style={styles.metaItem}><User size={14} /> {blog.author}</div>
                  <div style={styles.share} title="Share on social media"><Share2 size={18} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default Blog;
