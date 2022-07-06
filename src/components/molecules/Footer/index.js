import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/chandramogali-gomasi-04888120a/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Chandramogali Gomasi
        </a>
      </section>

      <section className="Footer__Items">
        {/* <a
          href="https://youtu.be/JFjvVmvC3pQ"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a> */}
        <a
          href="https://github.com/chandramogali/sort-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
