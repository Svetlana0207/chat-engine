import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import Login from './components/Login';
import './App.css';

const projectID = '79df37d0-fb16-4568-8efb-93f2219bcbc2';

const App = () => {
  if (!localStorage.getItem('username')) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;