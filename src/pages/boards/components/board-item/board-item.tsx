import { Link } from "react-router-dom";
// types
import User from '@custom-types/models/User';
import BoardAvatarContainer from "@pages/boards/components/board-avatar-container/board-avatar-container";

interface BoardItemProps {
  title: string,
  boardId: number,
  background: string,
  users: User[],
}

function BoardItem ({ title, boardId, background, users }: BoardItemProps) {
  return (
    <article className="board">
      <div className="board__container">
        <h3 className="board__title">{title}</h3>
        <Link to={`/boards/${boardId}/`} className="board__link" />
      </div>
      <BoardAvatarContainer users={users} />
      {/* переделать */}
      <div className="board__background" style={
        background.startsWith('#')
          ? { background }
          : { background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${background}), lightgray 50%` }
      } />
    </article>
  )
}

export default BoardItem;