import { makeSureDbIsReady } from "@/lib/db";
import User from "@/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  await makeSureDbIsReady();
  const { username, password } = await request.json();
  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user._id, user.username },
    process.env.JWT_SECRET,
    {expiresIn:"1h"}
  );
  return NextResponse.json({ id: user._id, username: user.username });
}
