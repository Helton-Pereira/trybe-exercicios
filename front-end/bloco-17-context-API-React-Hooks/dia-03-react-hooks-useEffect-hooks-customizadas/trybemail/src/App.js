import { useEffect, useState } from 'react';
import './App.css';
import messagesList from './data/messageList';
import { READ, UNREAD } from './constants';
import Controls from './components/Controls';
import List from './components/List';

function App() {
  const [messages, setMessages] = useState(messagesList)

  useEffect(() => {
    const isAllMessagesRead = messages.every((message) => message.status === READ);

    if(isAllMessagesRead) {
      alert('Nenhuma mensagem a ser lida!')
    }
  }, [messages]);

  const setMessagesStatus = (messageId, newStatus) => {
    const updateMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus}
      }
      return currentMessage;
    })
    setMessages(updateMessages);
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: READ }))
    setMessages(allAsRead)
  }

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: UNREAD }));
    setMessages(allAsRead);
  };

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />

      <List
        messages={ messages }
        setMessagesStatus={ setMessagesStatus }
        />
    </div>
  );
}

export default App;
