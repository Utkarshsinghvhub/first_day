import express from "express";
import {
    // getAdminOrders,
     getMyOrders,
    getOrderDetails,
    // paymentVerification,
    placeOrder
    // placeOrderOnline,
    // processOrder,
  } from "../controllers/order.js";
  import { isAuthenticated } from "../middlewares/auth.js";

  const router = express.Router();

  router.post("/createorder", placeOrder);

  
router.get("/myorders", isAuthenticated, getMyOrders);

router.get("/order/:id", isAuthenticated, getOrderDetails);

  export default router;