import s from "./UsersPage.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";

const UsersPage = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  unfollowUser,
  followUser,
  buttonDisableInProgress,
  users,
  ...props
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users_wrapper}>
      <Paginator
        pages={pages}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />

      {users.map((u) => (
        <User
          user={u}
          buttonDisableInProgress={buttonDisableInProgress}
          unfollowUser={unfollowUser}
          followUser={followUser}
        />
      ))}
    </div>
  );
};

export default UsersPage;
