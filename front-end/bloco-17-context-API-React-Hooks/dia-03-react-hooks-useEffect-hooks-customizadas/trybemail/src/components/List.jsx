import { READ, UNREAD } from '../constants';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function List({ messages, setMessagesStatus }) {
  return (
    <ul>
      { messages.map((message) => {
        const messageClass = message.status === READ ? 'message-read' : 'message-unread';

        return (
      <li key={ message.id } className={ `message-title ${messageClass}` }> {message.title}
      <button
      type='button'
      title='Marcar como lida'
      onClick={ () => setMessagesStatus(message.id, READ) }>
        <img src={ readIcon } alt=""/>
      </button>
      <button
      type='button'
      title='Marcar como não lida'
      onClick={ () => setMessagesStatus(message.id, UNREAD)}
      >
        <img src={ unreadIcon } alt="" />
      </button>
      </li>
      )}) }
    </ul>
  )
};

export default List;
