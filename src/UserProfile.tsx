import React from 'react';


export default function UserProfile() {

    return (
        <main>
          <div className='header'>
            <h1 className='title'>Welcome to ColossusVault</h1>
            <div className='user-info'>
              <p>Username: John Doe</p>
              <p>Email: johndoe@example.com</p>
              {/* 更多用户资料信息 */}
            </div>
          </div>
          {/* 其他内容 */}
        </main>
      );
}
