import dotenv from "dotenv";
dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
    url: string;
    key: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    url: process.env.DB_URL || "",
    key: process.env.DB_KEY || "",
};

export default config;
