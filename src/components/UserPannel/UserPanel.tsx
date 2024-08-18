import Button from "../Button/Button";

import PersonIcon from "../Icons/PersonIcon";
import TriangleDownIcon from "../Icons/TriangleDownIcon";
import "./UserPanel.scss";

const user = false;

function UserPanel() {
  return (
    <div className="header__user-panel-container">
      {!user && (
        <div className="header__account-panel">
          <Button text="Sign In" color="lightGray" />
          <Button text="Sign Up" color="darkGray" />
        </div>
      )}
      {user && (
        <Button>
          <PersonIcon color="white" />
          <TriangleDownIcon color="white" />
        </Button>
      )}
    </div>
  );
}

export default UserPanel;
