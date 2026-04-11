import React from "react";

const sh=()=>
(
    <header style={styles.header}>
    <div style={styles.logo}>MyApp</div>

    <nav>
      <ul style={styles.navList}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>About</li>
        <li style={styles.navItem}>Services</li>
        <li style={styles.navItem}>Contact</li>
      </ul>
    </nav>
  </header>
);
// };

const styles = {
header: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  backgroundColor: "#333",
  color: "#fff",
},
logo: {
  fontSize: "24px",
  fontWeight: "bold",
},
navList: {
  listStyle: "none",
  display: "flex",
  gap: "20px",
  margin: 0,
  padding: 0,
},
navItem: {
  cursor: "pointer",
},
};



export default sh;
