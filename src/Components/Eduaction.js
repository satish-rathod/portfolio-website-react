import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education">
    <h2 className='heading'>Education</h2>
    <div className="education-content">
        <div className="education-item">
            <h3>2015-2020</h3>
            <p>Secondary High School</p>
            <div className='line'>
                <div className='circle'></div>
                <div className='line-content'></div>
            </div>
            <h2 className='uni'>Jigisha International School.</h2>
            <h4 className='place'>Aurangabad</h4>
        </div>
        <div className="education-item">
            <h3>2020-2023</h3>
            <p>High School</p>
            <div className='line'>
                <div className='circle'></div>
                <div className='line-content'></div>
            </div>
            <h2 className='uni'>Vivekanand Arts, Sardar Dalipsingh Commerce and Science College</h2>
            <h4 className='place'>Aurangabad</h4>
        </div>
        <div className="education-item">
            <h3>2023-2027</h3>
            <p>BSC. Computer Science</p>
            <div className='line'>
                <div className='circle'></div>
                <div className='line-content'></div>
            </div>
            <h2 className='uni'>Scaler School of Technology</h2>
            <h4 className='place'>Banglore</h4>
        </div>
    </div>
</div>
  );
};

export default Education;