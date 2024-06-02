import React from 'react';
import './Aboutme.css';

const Aboutme = () => {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="content">
                <div className="text">
                    <p className="bold">
                        I am a Professional UI/UX Designer and Web developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,
                    </p>
                    <div className="contact-info">
                        <div> 
                            <h3>phone</h3>
                            <p>+123 456 7890</p>
                        </div>

                        <div> 
                            <h3>email</h3>
                            <p>satrat@gmail.com</p>
                        </div>

                        <div> 
                            <h3>website</h3>
                            <p>satrat.com</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="path_to_image" alt="profile" /> 
                    <div className="social-links">
                        <button>facebook</button>
                        <button>twitter</button>
                        <button>linkedin</button>
                        <button>instagram</button>
                        <button>github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;