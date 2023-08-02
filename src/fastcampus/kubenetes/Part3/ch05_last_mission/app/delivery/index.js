const koa = require("koa");
const Router = require("@koa/router");

const app = new koa();
const router = new Router();

router.get("/status", async (ctx) => {
  ctx.body = {
    type: "Delivery [GET]/status",
    message: "현재 배달 진행 상황입니다....",
  };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Delivery Server is Running ON ${PORT}......!!!`);
});
