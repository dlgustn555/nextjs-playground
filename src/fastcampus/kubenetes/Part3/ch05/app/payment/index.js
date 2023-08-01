const koa = require("koa");
const Router = require("@koa/router");

const app = new koa();
const router = new Router();

router.get("/receipt", async (ctx) => {
  ctx.body = {
    type: "Payment [GET]/receipt",
    message: "영수증을 리턴합니다.",
    data: {
      a: 100,
      b: 200,
    },
  };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Payment Server is Running ON ${PORT}......!!!`);
});
