import { model } from "mongoose";
import userSchema from "../schema/user.schema.js";

const UserModel = new model("User", userSchema);
export default UserModel;
