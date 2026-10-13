import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultMeta = {
  title: 'Ethixweb | Digital Solutions for Indian Businesses',
  description: 'Ethixweb builds high-performance websites and web applications tailored for Indian startups, MSMEs, and enterprises.'
};

const pageMetadata = {
  '/': {
    title: 'Ethixweb | Digital Solutions for Indian Businesses',
    description: 'Empowering Indian businesses with modern web development, scalable applications, and digital growth solutions.'
  },
  '/services': {
    title: 'Services | Ethixweb',
    description: 'Explore Ethixweb services: Website Development, Web Applications, E-commerce, UI/UX Design, Automation, and Maintenance.'
  },
  '/about': {
    title: 'About Ethixweb | The India Digital Transformation Story',
    description: 'Learn why Ethixweb is built specifically for Indian startups, MSMEs, and digital leaders looking for practical, high-value web solutions.'
  },
  '/contact': {
    title: 'Contact Ethixweb | Start Your Project',
    description: 'Get in touch with Ethixweb. Tell us about your web development or digital requirements and get a prompt response.'
  },
  '/admin/login': {
    title: 'Admin Login | Ethixweb',
    description: 'Authorized admin portal login for Ethixweb lead management.'
  },
  '/admin': {
    title: 'Admin Dashboard | Ethixweb',
    description: 'Manage client enquiries, status updates, and digital project leads.'
  }
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMetadata[location.pathname] || defaultMeta;
    document.title = meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = meta.description;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}
