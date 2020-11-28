const io = require("socket.io-client")

const socket = io(window.location.origin.replace("3000", "3003"))

export default socket
