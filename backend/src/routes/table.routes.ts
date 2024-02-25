import { Router } from "express";
import {
  deleteTable,
  getTables,
  insertTable,
  mailController,
} from "../controllers/table.controller";
import { validateData } from "../middleware/validation.middleware";
import { personSchema } from "../middleware/validation.middleware"; // Import the schema separately
const router = Router();

router.route("/").post(validateData(personSchema), insertTable).get(getTables);

router.route("/:id").delete(deleteTable);

router.route("/mail").post(mailController);
export default router;
