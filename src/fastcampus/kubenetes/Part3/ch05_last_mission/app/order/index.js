const axios = require("axios");
const koa = require("koa");
const Router = require("@koa/router");

const app = new koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = {
    type: "Order [GET]/",
    message: "메뉴를 선택한 후 주문해 주세요.",
  };
});

//* 주문 결제
router.post("/order/checkout", async (ctx) => {
  //* 영수증 조회
  const { data } = await axios.get(`http://payment.payment/receipt`);
  ctx.body = {
    type: "Order [POST]/order/checkout",
    podIp: process.env.POD_IP,
    hostIp: process.env.HOST_IP,
    message: "주문결제가 완료되었습니다.",
    receipt: data,
  };
});

//* 주문 상태 확인
router.get("/order/detail", async (ctx) => {
  //* 배달상태 조회
  const { data } = await axios.get(`http://delivery.delivery/status`);

  ctx.body = {
    type: "Order [POST]/order/checkout",
    podIp: process.env.POD_IP,
    hostIp: process.env.HOST_IP,
    message: "주문 상태를 확인 합니다.",
    status: data,
  };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Order Server is Running ON ${PORT}......!!!`);
});
