const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Ingredient",
  },
});

//encrypt pass before saving in DB
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method in login user

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    // throw Error('incorrect password');
    throw Error("Please provide a valid username and password");
  }
  throw Error("Please provide a valid username and password");
  // throw Error('incorrect email');
};

const User = mongoose.model("user", userSchema);

module.exports = User;
