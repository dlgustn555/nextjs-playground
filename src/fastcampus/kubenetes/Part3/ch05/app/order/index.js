const axios = require("axios");
const koa = require("koa");
const Router = require("@koa/router");

const app = new koa();
const router = new Router();

router.post("/checkout", async (ctx) => {
  //* 영수증 조회
  const { data } = await axios.get(
    `http://${process.env.PAYMENT_HOST}:${process.env.PAYMENT_PORT}/receipt`
  );
  ctx.body = {
    type: "Order [POST]/checkout",
    message: "영수증을 조회합니다.",
    data,
  };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Order Server is Running ON ${PORT}......!!!`);
});
