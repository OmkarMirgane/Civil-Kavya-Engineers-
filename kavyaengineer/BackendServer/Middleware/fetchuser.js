var jwt = require("jsonwebtoken");
const JWT_SECRETE = "SecreteKeyKvayaEngineers";
const fetchuser = (req, res, next) => {
  //Get the user from jwt tokenb and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRETE);
    req.user = data.user;
    next();
  } catch {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;