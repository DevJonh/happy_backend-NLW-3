import multer from "multer";
import path from "path";

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const name = file.originalname.split(" ").join("-");
      const fileName = `${Date.now()}-${name}`;

      cb(null, fileName);
    },
  }),
};
