import React from 'react';
import NewChatButton from './NewChatButton';
import ListItem from './ListItem';
import DeleteConversationsButton from './DeleteConversationsButton';

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <NewChatButton />
      <ListItem title="history 1" />
      <ListItem title="history 2" />
      <ListItem title="history 3" />
      <DeleteConversationsButton />
    </div>
  );
};

export default Sidebar;
