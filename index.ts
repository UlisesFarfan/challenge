import "dotenv-flow/config";
import app from "./src/index";

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});