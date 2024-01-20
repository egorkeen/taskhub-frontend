// components
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import BoardList from "../board-list/board-list";
import AddBoardButton from "../add-board-button/add-board-button";

function Boards () {
  return (
    <>
      <Header />
      <section className="boards">
        <BoardList />
        <AddBoardButton />
      </section>
      <Footer />
    </>
  );
};

export default Boards;