import React, { useState, useEffect, useRef } from "react";

const storyData = [
  { id: 1, name: "mr_gowth...", type: "image", url: "/src/assets/im1.jpg" },
  { id: 2, name: "vive_x123", type: "video", url: "src/assets/hey1.mp4" }, // Add video files
  { id: 3, name: "classy__cl...", type: "image", url: "/src/assets/im3.jpg" },
  { id: 4, name: "hello_guru", type: "video", url: "src/assets/hey2.mp4" },
  { id: 5, name: "traveler_01", type: "image", url: "/src/assets/im4.jpg" },
  { id: 6, name: "foodie_life", type: "image", url: "/src/assets/im2.jpg" },
];

function Stories() {
  const [activeStory, setActiveStory] = useState(null);
  const [seenStories, setSeenStories] = useState([]);
  const videoRef = useRef(null);

  const nextStory = () => {
    if (activeStory < storyData.length - 1) {
      setActiveStory(activeStory + 1);
    } else {
      setActiveStory(null);
    }
  };

  useEffect(() => {
    if (activeStory === null) return;

    const current = storyData[activeStory];
    setSeenStories((prev) => [...new Set([...prev, current.id])]);

    // If it's an image, set a 3s timer. If video, let the onEnded event handle it.
    if (current.type === "image") {
      const timer = setTimeout(nextStory, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeStory]);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* 1. HORIZONTAL STORY LIST */}
      <div style={{ display: "flex", gap: "15px", padding: "20px", overflowX: "auto", borderBottom: "1px solid #eee" }}>
        {storyData.map((story, index) => (
          <div key={story.id} onClick={() => setActiveStory(index)} style={{ cursor: "pointer", textAlign: "center", flexShrink: 0 }}>
            <div style={{
              padding: "3px", borderRadius: "50%",
              background: seenStories.includes(story.id) ? "#ccc" : "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
            }}>
              <img src={story.type === "image" ? story.url : "/src/assets/video_thumb.jpg"} 
                   style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "2px solid white" }} />
            </div>
            <div style={{ fontSize: "12px", marginTop: "5px" }}>{story.name}</div>
          </div>
        ))}
      </div>

      {/* 2. FULL SCREEN VIEWER */}
      {activeStory !== null && (
        <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000" }}>
          
          {/* Blurred Background Layer */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${storyData[activeStory].url})`,
            backgroundSize: "cover", backgroundPosition: "center",
            filter: "blur(20px) brightness(0.5)", transform: "scale(1.1)", zIndex: -1
          }} />

          {/* Close Button */}
          <button onClick={() => setActiveStory(null)} style={{ position: "absolute", top: "20px", right: "20px", color: "white", background: "none", border: "none", fontSize: "30px", cursor: "pointer", zIndex: 10 }}>×</button>

          {/* Content Container */}
          <div style={{ width: "100%", maxWidth: "450px", height: "80vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            
            {storyData[activeStory].type === "image" ? (
              <img src={storyData[activeStory].url} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            ) : (
              <video 
                ref={videoRef}
                src={storyData[activeStory].url} 
                autoPlay 
                onEnded={nextStory}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            )}

            {/* Tap areas for Prev/Next */}
            <div style={{ position: "absolute", width: "50%", height: "100%", left: 0 }} onClick={(e) => { e.stopPropagation(); setActiveStory(prev => Math.max(0, prev - 1)) }} />
            <div style={{ position: "absolute", width: "50%", height: "100%", right: 0 }} onClick={(e) => { e.stopPropagation(); nextStory() }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;