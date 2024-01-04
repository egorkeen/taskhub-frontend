import { Link } from "react-router-dom";
// types
import User from '@custom-types/User';
import BoardAvatarContainer from "@pages/boards/components/board-avatar-container/board-avatar-container";

interface BoardItemProps {
  title: string,
  boardId: number,
  background: string,
  users: User[],
}

function BoardItem ({ title, boardId, background, users }: BoardItemProps) {
  return (
    <article className="board" style={
        background.startsWith('#')
          ? { background }
          : { backgroundImage: `url(${background})` }
    }>
      <div className="board__container">
        <h3 className="board__title">{title}</h3>
        <Link to={`/boards/${boardId}/`} className="board__link" />
      </div>
      <BoardAvatarContainer users={users} />
    </article>
  )
}

export default BoardItem;