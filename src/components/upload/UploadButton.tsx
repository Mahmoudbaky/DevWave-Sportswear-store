import { generateUploadButton } from "@uploadthing/react";
import { baseUrl } from "@/lib/constants";

const UploadButton = generateUploadButton({
  url: `${baseUrl}/api/uploadthing`,
});
// ...

export default UploadButton;
