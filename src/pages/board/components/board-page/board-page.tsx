import Header from "@components/header/header";
import { useParams } from "react-router-dom";
import boardsData from '@utils/boardsData.json';

function BoardPage () {
  const { boardId } = useParams();
  const board = boardsData.boards.find((board) => board.boardId === Number(boardId));
  if (board) {
    return (
      <>
        <Header />
        <section>
          <div>{boardId} id</div>
          <div>title: {board.title}</div>
          <div>users: {board.users.map((user, index) => (
            <li key={index}>
              <div>Nickname: {user.nickname}</div>
              <div>Email: {user.email}</div>
              <div>Avatar: {user.avatar}</div>
            </li>
          ))}</div>
        </section>
      </>
    )
  } else {
    return (
      <>
        <Header />
        <section>
          <div>Ошибка! Такой доски не существует!</div>
        </section>
      </>
    )
  }
}

export default BoardPage;