import { useState } from "react";
import Reels from "./Reels";
import Search from "./src/Search";
import Explore from "./src/Explore";


function Slider() {
  const [openSearch, setOpenSearch] = useState(false);

  const handleSearchClick = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="m-3">
      <div className="he d-flex flex-column gap-4">
        <img
          className="logotext"
          src="/src/assets/insta_Text.png"
          alt="Instagram Text"
        />

        <div className="ho">
          <i className="bi bi-house"></i> Home
        </div>

        <div
           className="ho"
          data-bs-toggle="offcanvas"
          data-bs-target="#searchOffcanvas"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-search"></i> Search<Search/>
        </div>

        <div className="ho">
          <i className="bi bi-compass"></i> Explore <Explore/>
        </div>

        <div className="ho">
          <i className="bi bi-film"></i> Reels
        </div>
         <div className="ho">
          <i className="bi bi-chat"></i> Message
        </div>

        <div className="ho">
          <i className="bi bi-chat"></i> Notification
        </div>

        <div className="ho">
          <i className="bi bi-calendar-plus-fill"></i> Create
        </div>

        <div className="ho">
          <i className="bi bi-person-circle"></i> Profile
        </div>
      </div>

       <div className="position-fixed bottom-0 d-flex flex-column gap-4 mb-5">
        <div className="ho">
          <i className="bi bi-list"></i> More
        </div>
        <div className="ho">
          <i className="bi bi-meta"></i> Also From Meta
        </div>
      </div>

      {openSearch && <Search />}
    </div>
  );
}

export default Slider;
