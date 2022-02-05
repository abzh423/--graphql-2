import express from "express";
import { graphqlHTTP } from "express-graphql";

const app: express.Application = express();
const port: number = 5000;

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`The server is listening on the port ${port}`);
});
