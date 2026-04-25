import { io } from "socket.io-client";

const socket = io("https://blitzplaygame.onrender.com", {
  transports: ["websocket", "polling"]
});

socket.on("connect", () => {
  console.log("Connected with id:", socket.id);
  
  socket.emit("create-party", (res) => {
    console.log("Create party res:", res);
    
    if (res && res.code) {
      socket.emit("join-party", { code: res.code, name: "TestHost" }, (joinRes) => {
        console.log("Join party res:", joinRes);
        setTimeout(() => process.exit(0), 1000);
      });
    } else {
      console.log("No code returned");
      process.exit(1);
    }
  });
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err.message);
  process.exit(1);
});
