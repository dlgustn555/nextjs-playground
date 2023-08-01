const axios = require("axios");
const koa = require("koa");
const Router = require("@koa/router");

const app = new koa();
const router = new Router();

//* 주문 결제
router.post("/checkout", async (ctx) => {
  //* 영수증 조회
  const { data } = await axios.get(`http://payment.payment/receipt`);
  ctx.body = {
    type: "Order [POST]/checkout",
    message: "주문결제가 완료되었습니다.",
    receipt: data,
  };
});

//* 주문 상태 확인
router.get("/detail", async (ctx) => {
  //* 배달상태 조회
  const { data } = await axios.get(`http://delivery.delivery/status`);

  ctx.body = {
    type: "Order [POST]/checkout",
    message: "주문 상태를 확인 합니다.",
    status: data,
  };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Order Server is Running ON ${PORT}......!!!`);
});
