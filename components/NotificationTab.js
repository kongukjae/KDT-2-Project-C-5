import { Link } from "react-router-dom";

function Notification() {
  return (
    <div>
      <Link to="/NoticePage">
        <button>📃</button>
      </Link>
    </div>
  );
}

export default Notification;
