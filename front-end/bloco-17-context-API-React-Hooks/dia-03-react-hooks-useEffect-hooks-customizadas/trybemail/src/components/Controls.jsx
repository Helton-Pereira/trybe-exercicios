import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div>
      <button
      type='button'
      onClick={ markAllAsRead }
      >
        <img src={ readIcon } alt="" />
        Marcar todas como lida
      </button>

      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        <img src={ unreadIcon } alt="" />
        Marcar todas como não lida
      </button>
    </div>
  )
};

export default Controls;
