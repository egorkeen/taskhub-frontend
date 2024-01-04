import defaultIcon from "@images/board/board__default-avatar.svg";

function BoardDefaultAvatar () {
  return (
    <img src={defaultIcon} className="board__default-avatar" alt="Пользователь" />
  )
}

export default BoardDefaultAvatar;