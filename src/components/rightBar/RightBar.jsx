import React from 'react';
import './RightBar.scss';

const RightBar = () => {
  const suggestions = [
    { id: 1, name: 'Jane Doe', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    { id: 2, name: 'John Smith', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    { id: 3, name: 'Alice Johnson', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    // Add more suggestions as needed
  ];

  const activities = [
    { id: 1, description: 'Jane Doe changed their cover picture', time: '1 min ago', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    { id: 2, description: 'John Smith liked a post', time: '2 mins ago', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    { id: 3, description: 'Alice Johnson commented on a photo', time: '3 mins ago', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    // Add more activities as needed
  ];

  const onlineFriends = [
    { id: 1, name: 'Jane Doe', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    { id: 2, name: 'John Smith', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    { id: 3, name: 'Alice Johnson', profilePic: 'https://storage.googleapis.com/a1aa/image/1vXosDQNEWazPhJEI4EKvhH5ffWeyiWgKQGxW0sv4Rdf61ZOB.jpg' },
    // Add more online friends as needed
  ];

  return (
    <div className="rightBar">
      <div className="section suggestions">
        <h3 className="section-title">Suggestions For You</h3>
        {suggestions.slice(0, 2).map(user => (
          <div className="user-item" key={user.id}>
            <img src={user.profilePic} alt={user.name} className="profile-pic" />
            <span className="username">{user.name}</span>
          </div>
        ))}
        <a href="/suggestions" className="see-more">See More</a>
      </div>

      <div className="divider"></div>

      <div className="section activities">
        <h3 className="section-title">Latest Activities</h3>
        {activities.slice(0, 2).map(activity => (
          <div className="activity-item" key={activity.id}>
            <img src={activity.profilePic} alt="User Activity" className="profile-pic" />
            <div className="activity-description">{activity.description}</div>
            <span className="activity-time">{activity.time}</span>
          </div>
        ))}
        <a href="/activities" className="see-more">See More</a>
      </div>

      <div className="divider"></div>

      <div className="section online-friends">
        <h3 className="section-title">Online Friends</h3>
        {onlineFriends.slice(0, 2).map(friend => (
          <div className="user-item" key={friend.id}>
            <img src={friend.profilePic} alt={friend.name} className="profile-pic" />
            <span className="username">{friend.name}</span>
          </div>
        ))}
        <a href="/online-friends" className="see-more">See More</a>
      </div>
    </div>
  );
};

export default RightBar;
