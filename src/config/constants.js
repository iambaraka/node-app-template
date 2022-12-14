import dotenv from "dotenv";

dotenv.config();

export const DEFAULT_TIME_FORMAT_PATTERN = "do MMMM yyyy HH:mm:ss";
export const DEFAULT_TIME_FORMAT_PATTERN_SHORT = "do MMMM yyyy";

export const MAIL_TRANSPORT_PASSWORD = process.env.MAIL_TRANSPORT_PASSWORD;
