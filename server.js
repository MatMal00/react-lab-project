import jsonServer from "json-server";
import jsonwebtoken from "jsonwebtoken";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post("/authUsers", (req, res) => {
    const { email, password } = req.body;
    const users = router.db.get("authUsers").value();

    const user = users.find((user) => user.email.trim() === email && user.password.trim() === password);

    if (user) {
        const authorizationToken = jsonwebtoken.sign({ userId: user.id }, "my-key");

        user.authorizationToken = authorizationToken;

        res.status(200).jsonp(user);
    } else {
        res.status(401).jsonp({ error: "Invalid credentials" });
    }
});

server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
