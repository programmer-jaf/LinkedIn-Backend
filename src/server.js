import connectDB from "./database/database.js";
import app  from './app/app.js';

const startServer = () =>{
  try {
    connectDB();
    app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`));
  } catch (error) {
    console.error(error);
  }
}

// start server
startServer();