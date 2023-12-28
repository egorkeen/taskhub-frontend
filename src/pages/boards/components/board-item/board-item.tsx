import { Link } from "react-router-dom";
import defalutIcon from '../../../../images/board/board__default-avatar.svg';
import { User } from '../../../../types/User';

interface BoardItemProps {
  title: string,
  boardId: number,
  background: string,
  users: User[],
  isPrivate: boolean,
}

function BoardItem ({ title, boardId, background, users, isPrivate }: BoardItemProps) {
  return (
    <article className="board" style={{ background }}>
      <h3 className="board__title">{title}</h3>
      <Link to={`/boards/${boardId}/`} className="board__link" />
      <div className="board__avatar-container">
        {
          users.length <= 1
            ? <img src={defalutIcon} className="board__default-avatar" alt="Пользователь" />
            : users.map(user => <img className="board__avatar" src={user.avatar} alt={user.name} />)
        }
      </div>
    </article>
  )
}

export default BoardItem;