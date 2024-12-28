import server from "./server";

// Server
// Port
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});