const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.pre("save", async function () {
  if (this.isModified("password"))
    this.password = await bcrypt(this.password, 10);
});

export default mongoose.models.User || mongoose.model("User", schema);
