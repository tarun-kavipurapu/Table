import { Router } from "express";
import { getTables, insertTable } from "../controllers/table.controller";
import { validateData } from "../middleware/validation.middleware";
import { personSchema } from "../middleware/validation.middleware";
const router = Router();

router
  .route("/")
  .post(validateData(personSchema), insertTable)
  .get(getTables)
  .delete();

export default router;
