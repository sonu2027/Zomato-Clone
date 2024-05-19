import { Router } from "express";
import { sendEmail } from "../controller/partner.controller.js";
import { deleteRestaurant, registerRestaurant, partnerRestaurant } from "../controller/restaurant.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/registerrestaurant").post(
  upload.fields([
    {
      name: "restaurant_menu",
      maxCount: 1,
    },
    {
      name: "restaurant_food_image",
      maxCount: 1,
    },
    {
      name: "restaurant_image",
      maxCount: 1,
    },
  ]),
  registerRestaurant
);

router.route("/deleterestaurant").delete(deleteRestaurant)

router.route("/sendemailotp").post(upload.fields([]), sendEmail);

router.route("/partnerrestaurant").post(partnerRestaurant);

export default router;
