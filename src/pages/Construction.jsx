import { Link } from 'react-router-dom';

const Construction = () => {
  return (
    <div className="smooth-scroll-wrapper">
        <header style={{ position: 'absolute' }}>
             <Link to="/" className="logo">jin.</Link>
        </header>
        <section className="construction-section">
            <div className="construction-content reveal active">
                <i className="fas fa-hammer construction-icon"></i>
                <h1>Work in <span className="accent">Progress</span></h1>
                <p>I am currently crafting this section of my portfolio to meet the highest standards.</p>
                <Link to="/" className="btn">Return Home</Link>
            </div>
        </section>
        <footer>
            <p>Copyright &copy; 2025 jin. All Rights Reserved.</p>
        </footer>
    </div>
  );
};

export default Construction;