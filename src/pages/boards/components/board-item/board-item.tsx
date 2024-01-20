import { Link } from "react-router-dom";
// types
import User from '@custom-types/models/User';
import BoardAvatarContainer from "@pages/boards/components/board-avatar-container/board-avatar-container";

interface BoardItemProps {
  title: string,
  boardId: number,
  backgroundImage: string | null,
  backgroundColor: string,
  users: User[],
}

function BoardItem ({ title, boardId, backgroundImage, backgroundColor, users }: BoardItemProps) {
  return (
    <Link to={`/boards/${boardId}/`} className="board__wrapper">
      <article className="board">
        <div className="board__container">
          <h3 className="board__title">{title}</h3>
          <Link to={`/boards/${boardId}/`} className="board__link" />
        </div>
        <BoardAvatarContainer users={users} />
        {/* Проверяем backgroundImage на null перед применением */}
        {backgroundImage !== null && (
          <div className="board__background" style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), lightgray 50%`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`,
          }} />
        )}
        {/* Или просто применяем backgroundColor */}
        {(backgroundImage === null) && (
          <div className="board__background" style={{ backgroundColor }} />
        )}
      </article>
    </Link>
  )
}

export default BoardItem;