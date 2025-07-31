import { Container } from "@mui/material";
import styles from "./Header.module.scss";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

function Header() {
  return (
    <div className={styles.header}>
      <Container maxWidth="xl" className={styles.container}>
        <div>
          <span></span>
          <span>Robert Fox</span>
        </div>
        <div className={styles.searchContainer}>
          <input type="search" placeholder="Search address, room, price..." />
        </div>
        <div>
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 30 }} />
          <MarkChatUnreadOutlinedIcon />
        </div>
      </Container>
    </div>
  );
}

export default Header;
