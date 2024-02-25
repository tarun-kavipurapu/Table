import { Router } from "express";
import { getTables, insertTable } from "../controllers/table.controller";
import { validateData } from "../middleware/validation.middleware";
import { personSchema } from "../middleware/validation.middleware"; // Import the schema separately
const router = Router();

router
  .route("/")
  .post(validateData(personSchema), insertTable)
  .get(getTables)
  .delete();

export default router;
