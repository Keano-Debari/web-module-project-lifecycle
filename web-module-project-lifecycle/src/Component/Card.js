import React from 'react';

export default class Card extends React.Component {
 
render() {
    const {users} = this.props;
    console.log(users);
    return (
      <div>
        <div className='image'>
          <img src={users.avatar_url} alt='user avatar' />
        </div>
        <div className='info'>
          <h3>{users.name}</h3>
          <p>Login: {users.login}</p>
          <p>Followers: {users.followers}</p>
          <p>Following: {users.following}</p>
        </div>
      </div>
    );
  }
}