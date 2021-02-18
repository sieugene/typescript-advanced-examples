import { connect, connection } from "mongoose";

type OptionsType = {
  db: string;
};

export const connectDB = ({ db }: OptionsType): void => {
  const connectFN = () => {
    connect(db)
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((err) => {
        console.error(`Error connection${err.message}`);
        return process.exit();
      });
  };
  connectFN();
  connection.on("disconnected", connectFN);
};
