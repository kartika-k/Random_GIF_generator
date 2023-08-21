import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="items-center relative w-full h-screen flex flex-col background  overflow-x-hidden">
      <h1 className="w-11/12 text-center mt-[40px] 
       px-10 py-2 text-4xl font-bold  bg-white rounded-lg ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
