module.exports.profile = function (req, res) {
  //   return res.end("<h1> My User Profile </h1>");
  return res.render("user-profile", {
    tittle: "User Profile",
  });
};
