import { Router } from "express";
import * as controllers from "../controllers/controllers.js";
const router = Router();

router.get("/", controllers.indexPage);
router.get("/fruits/new", controllers.newFruit);
router.get("/fruits", controllers.fruit);
router.get("/fruits/:fruitId",controllers.showFruit)
router.get("/fruits/:fruitId/edit", controllers.editFruitPage);

router.delete("/fruits/:fruitId", controllers.deleteFruit);
// server.js

router.put("/fruits/:fruitId", controllers.editFruit );
  
router.post("/fruits", controllers.fruits);

export default router;
