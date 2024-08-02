import { mainColor } from "../../colours";
import CodeIcon from "@mui/icons-material/Code";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col  ">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-[${mainColor}] p-[6px] rounded-md`}>
        <CodeIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px] ">
        <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <button
        className={`max-sm:w-full bg-[${mainColor}] p-[8px] px-6 text-sm text-white rounded-md`}
      >
        Sign in
      </button>
      <button
        className={`text-sm border border-[${mainColor}] text-[${mainColor}] hover:bg-[${mainColor}] hover:text-white p-[8px] px-6 rounded-md`}
      >
        Sign up
      </button>
    </div>
  );
}
