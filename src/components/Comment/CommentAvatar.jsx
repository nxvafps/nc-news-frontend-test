import { AvatarContainer, Avatar } from "./CommentStyles";
import PropTypes from "prop-types";

const CommentAvatar = ({ author, avatarUrl }) => (
  <AvatarContainer>
    <Avatar
      src={avatarUrl || "/default-avatar-placeholder.png"}
      alt={`${author}'s avatar`}
    />
  </AvatarContainer>
);

CommentAvatar.propTypes = {
  author: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
};

export default CommentAvatar;
