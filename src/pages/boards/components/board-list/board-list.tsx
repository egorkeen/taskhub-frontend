// components
import BoardItem from "../board-item/board-item";
// board data
import boardsData from '@utils/boardsData.json';

function BoardList () {
  return (
    <section className="board-list">
      {boardsData.boards.map(board => (
        <BoardItem
          key={board.boardId}
          boardId={board.boardId}
          title={board.title}
          background={board.background}
          users={board.users}
        />
      ))}
    </section>
  )
}

export default BoardList;