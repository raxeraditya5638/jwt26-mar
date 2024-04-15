import ConnectDB from "@/lib/ConnectDB";
import User from "@/models/User";

export default async function Page({
  params,
}: {
  params: { profile: string };
}) {
  await ConnectDB();
  const para = params.profile;
  const data = User.findOne().populate("users", User);
  console.log(params);
  return (
    <div>
      My Post: {params.profile}
      <h1>{data}</h1>
    </div>
  );
}
