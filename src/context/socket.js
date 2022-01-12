import React from "react";
import socketio from "socket.io-client";
import { SOCKET_URL } from "../../../socket-server/index";

export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = React.createContext();