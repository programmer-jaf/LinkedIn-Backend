import asyncHandler from "../utils/asyncHandler.js";

const healthCheckController = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "I am a healthy route 😁😁",
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
});

export default healthCheckController;
