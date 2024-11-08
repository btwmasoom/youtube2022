import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Stories Section */}
      <div className="stories">
        <div className="container">
          {/* Add Your Story */}
          <div className="card">
            <img
              alt="Your Story"
              src="https://storage.googleapis.com/a1aa/image/spFTNNRXbFY4GJHPvmRk8ZzKyvHsebZWEXH5SME5nvBRaYzJA.jpg"
            />
            <div className="plus-icon">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="name">Your Story</div>
          </div>

          {/* Friends' Stories */}
          <div className="card">
            <img
              alt="Story by John Doe"
              src="https://storage.googleapis.com/a1aa/image/kh3B6JlgFfxROy9ojfPgPWg9iN2noP8YIBxBstXbPrdg0wmTA.jpg"
            />
            <div className="name">John Doe</div>
          </div>

          <div className="card">
            <img
              alt="Story by Alice Smith"
              src="https://storage.googleapis.com/a1aa/image/etOerfkWIAQ9Xpc9oekl4K6eBkfmgMlI8pDWLKS5Rj4KIeXzJA.jpg"
            />
            <div className="name">Alice Smith</div>
          </div>

          <div className="card">
            <img
              alt="Story by Bob Johnson"
              src="https://storage.googleapis.com/a1aa/image/wIhHpfjjDo2YcCJCeHjXJ6KF6triEewGkwg4aqfPjfRbEfr5E.jpg"
            />
            <div className="name">Bob Johnson</div>
          </div>

          <div className="card">
            <img
              alt="Story by Charlie Brown"
              src="https://storage.googleapis.com/a1aa/image/spFTNNRXbFY4GJHPvmRk8ZzKyvHsebZWEXH5SME5nvBRaYzJA.jpg"
            />
            <div className="name">Charlie Brown</div>
          </div>
        </div>
      </div>

      {/* First Post */}
      <div className="post">
        <div className="post-header">
          <img
            alt="Profile"
            src="https://storage.googleapis.com/a1aa/image/wIhHpfjjDo2YcCJCeHjXJ6KF6triEewGkwg4aqfPjfRbEfr5E.jpg"
          />
          <div>
            <div className="name">John Doe</div>
            <div className="time">a few seconds ago</div>
          </div>
        </div>

        <div className="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <img
            alt="Post"
            src="https://vehari.comsats.edu.pk/gallery/CDC/closing1fa23.jpg"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>

        <div className="post-actions">
          <FontAwesomeIcon icon={faHeart} className="action-icon" />
          <FontAwesomeIcon icon={faComment} className="action-icon" />
          <FontAwesomeIcon icon={faShare} className="action-icon" />
        </div>

        <div className="comment-section">
          <textarea placeholder="Write a comment..."></textarea>
          <div className="post-comment">
            <button id="post-comment-btn">Post</button>
          </div>
        </div>
      </div>

      {/* Additional Posts */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="post">
          <div className="post-header">
            <img
              alt="Profile"
              src="https://storage.googleapis.com/a1aa/image/wIhHpfjjDo2YcCJCeHjXJ6KF6triEewGkwg4aqfPjfRbEfr5E.jpg"
            />
            <div>
              <div className="name">User {index + 2}</div>
              <div className="time">{index + 5} minutes ago</div>
            </div>
          </div>

          <div className="post-content">
            <p>Post content for user {index + 2} goes here.</p>
            <img
              alt="Post"
              src="https://vehari.comsats.edu.pk/gallery/CDC/closing1fa23.jpg"
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>

          <div className="post-actions">
            <FontAwesomeIcon icon={faHeart} className="action-icon" />
            <FontAwesomeIcon icon={faComment} className="action-icon" />
            <FontAwesomeIcon icon={faShare} className="action-icon" />
          </div>

          <div className="comment-section">
            <textarea placeholder="Write a comment..."></textarea>
            <div className="post-comment">
              <button id="post-comment-btn">Post</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
