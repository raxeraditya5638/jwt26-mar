import ConnectDB from "@/lib/ConnectDB";
import User from "@/models/User";

export default async function Page({ params }: any) {
  await ConnectDB();
  let userId = params.profile;
  // parseInt(userId);
  console.log(userId);
  const data = await User.findOne({ _id: userId }).populate("username");
  console.log(data);
  return (
    <div>
      My Post: {params.profile}
      <h1>{data.email}</h1>
    </div>
  );
}
