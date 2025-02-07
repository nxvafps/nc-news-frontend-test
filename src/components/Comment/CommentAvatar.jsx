import { useState } from "react";
import { AvatarContainer, Avatar } from "./CommentStyles";
import PropTypes from "prop-types";

const CommentAvatar = ({ author, avatarUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AvatarContainer>
      <Avatar
        src={avatarUrl || "/default-avatar-placeholder.png"}
        alt={`${author}'s profile picture`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        style={{
          opacity: isLoading ? 0.6 : 1,
          transform: isLoading ? "scale(0.95)" : "scale(1)",
        }}
      />
    </AvatarContainer>
  );
};

CommentAvatar.propTypes = {
  author: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
};

export default CommentAvatar;
