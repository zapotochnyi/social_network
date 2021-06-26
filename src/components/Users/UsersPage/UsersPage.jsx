import s from "./UsersPage.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import Preloader from "../../common/Preloader/Preloader";

const UsersPage = ({
  totalUsersCount,
  isFetching,
  pageSize,
  onPageChanged,
  currentPage,
  unfollowUser,
  followUser,
  buttonDisableInProgress,
  users,
  portionSize,
  ...props
}) => {
  return (
    <div className={s.users_wrapper}>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        portionSize={portionSize}
      />

      {isFetching ? (
        <Preloader />
      ) : (
        users.map((u) => (
          <User
            user={u}
            buttonDisableInProgress={buttonDisableInProgress}
            unfollowUser={unfollowUser}
            followUser={followUser}
          />
        ))
      )}
    </div>
  );
};

export default UsersPage;
