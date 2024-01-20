import User from "@custom-types/models/User";
import BoardDefaultAvatar from "@pages/boards/components/board-default-avatar/board-default-avatar";
import BoardAvatar from "@pages/boards/components/board-avatar/board-avatar";

interface AvatarContainerProps {
  users: User[]
}

function BoardAvatarContainer({users}: AvatarContainerProps) {
  let AvatarsContainer = null;

  if (users.length === 1) {
    AvatarsContainer = <BoardDefaultAvatar />
  } else if (users.length <= 3) {
    AvatarsContainer = users.slice(0, 3).map((user, index) => {
      return <BoardAvatar order={index + 1} avatar={user.avatar} nickname={user.nickname} isBlurred={false}/>
    })
  } else if (users.length > 3) {
    AvatarsContainer = users.map((user, index) => {
      if (index + 1 <= 2) {
        return <BoardAvatar order={index + 1} avatar={user.avatar} nickname={user.nickname} isBlurred={false}/>
      } else if (index + 1 === 3) {
        return (
          <div className="board__image-wrapper">
            <span className="board__users-count">+{users.length - (index + 1)}</span>
            <BoardAvatar order={3} avatar={user.avatar} nickname={user.nickname} isBlurred={true}/>
          </div>
        )
      }
    })
  }
  return (
    <div className="board__avatar-container">
      { AvatarsContainer }
    </div>
  )
}

export default BoardAvatarContainer;