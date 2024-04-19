import Home from "@/components/Home";
import PageF from "@/components/PageF";
import PageS from "@/components/PageS";
import PageT from "@/components/PageT";

export default function home() {
  return (
    <>
      <div className="main w-full h-full">
        <div className="nav">
          <Home />
        </div>
        <div className="page">
          <PageF />
        </div>
        <div className="Page">
          <PageS />
        </div>
        <div className="Page">
          <PageT />
        </div>
      </div>
    </>
  );
}
