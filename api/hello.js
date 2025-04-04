export default function handler(req, res) {
    return res.status(200).json({
      message: "WELCOME",
      time: new Date().toISOString(),
    });
  }
  