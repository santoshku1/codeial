module.exports.home = function (req, res) {
  console.log(req.cookies);
  res.cookie("user_id", 45);
  //   return res.end("<h1> express is running for codeial!</h1>");
  return res.render("home", {
    title: "Home",
  });
};
