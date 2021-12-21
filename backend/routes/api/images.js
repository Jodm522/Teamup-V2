import router from ".";
import { singlePublicFileUpload, singleMulterUpload } from "../../awsS3";


router.post("/", singleMulterUpload("image"),
asyncHandler(async (req, res) => {
const image = await singlePublicFileUpload(req.file),
return res.jsom({image})
}))
