import Logo from "../../Logo/Logo";
import BookmarkButton from "../../BookmarkButton/BookmarkButton";
import UserPanel from "../../UserPannel/UserPanel";
import "./HeaderNavigation.scss";

function HeaderNavigation() {
  return (
    <nav className="header__navigation">
      <Logo />
      <BookmarkButton />
      <UserPanel />
    </nav>
  );
}

export default HeaderNavigation;
