import server from "./server";

// Server
// Port
const PORT = 5000;

server.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});