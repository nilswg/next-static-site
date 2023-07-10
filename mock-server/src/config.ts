import path from "path";

export const serverUrl = process.env.SERVER_URL;
export const port = !!serverUrl ? new URL(serverUrl).port : '5000';
export const staticPath = path.join(__dirname, '../../out');
