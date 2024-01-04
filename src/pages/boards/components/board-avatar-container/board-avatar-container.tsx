import User from "@custom-types/User";
import defaultIcon from "@images/board/board__default-avatar.svg";

interface AvatarContainerProps {
  users: User[]
}

function BoardAvatarContainer ({ users }: AvatarContainerProps) {
  return (
    <div className="board__avatar-container">
      {
        users.length <= 1
          ? <img src={defaultIcon} className="board__default-avatar" alt="Пользователь" />
          : users.map((user, index) => {
            if (index + 1 <= 2) {
              return <img className={`board__avatar board__avatar_${index + 1}`} src={user.avatar} alt={user.nickname} />
            } else if (index + 1 === 3) {
              return (
                <div className="board__image-wrapper">
                  <span className="board__users-count">+{users.length - (index + 1)}</span>
                  <img className="board__avatar board__avatar_3" src={user.avatar} alt={user.nickname} />
                </div>
              )
            }
          })
      }
    </div>
  )
}

export default BoardAvatarContainer;