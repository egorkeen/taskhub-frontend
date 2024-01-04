interface BoardAvatarProps {
  order: number,
  avatar: string,
  nickname: string,
  isBlurred: boolean
}

function BoardAvatar ({ order, avatar, nickname, isBlurred }: BoardAvatarProps) {
  return (
    <img className={`board__avatar board__avatar_${order} ${isBlurred ? 'board__avatar_3_blurred' : ''}`} src={avatar} alt={nickname} />
  )
}

export default BoardAvatar;