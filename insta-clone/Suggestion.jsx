import React from "react";

function Suggestions() {
    
  const suggestions = [
    {
      id: 1,
      username: "alex_07",
      name: "Alex",
      profilePic: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      username: "sophia",
      name: "Sophia",
      profilePic: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 3,
      username: "mark_dev",
      name: "Mark",
      profilePic: "https://i.pravatar.cc/150?img=45"
    },
    {
      id: 4,
      username: "emily",
      name: "Emily",
      profilePic: "https://i.pravatar.cc/150?img=21"
    }
  ];

  return (
    <div className="sug" style={styles.container}>
      <div style={styles.header}>
        <p style={styles.title}>Suggestions For You</p>
        <span style={styles.seeAll}>See All</span>
      </div>

      {suggestions.map((user) => (
        <div className="userhover" key={user.id} style={styles.userRow}>
          <img src={user.profilePic} alt="profile" style={styles.avatar} />

          <div style={styles.userInfo}>
            <span style={styles.username}>{user.username}</span>
            <span style={styles.name}>Suggested for you</span>
          </div>

          <button style={styles.followBtn}>Follow</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    padding: "10px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },
  title: {
    color: "#8e8e8e",
    fontWeight: "600",
    fontSize: "14px"
  },
  seeAll: {
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer"
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px"
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px"
  },
  userInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  username: {
    fontWeight: "600",
    fontSize: "14px"
  },
  name: {
    fontSize: "12px",
    color: "#8e8e8e"
  },
  followBtn: {
    background: "none",
    border: "none",
    color: "#0095f6",
    fontWeight: "600",
    cursor: "pointer"
  }
};

 

export default Suggestions;
