import ThemeSelector from "./ThemeSelector";
export default function Footer() {
  return (
    <div className="w-full bg-gray-800 h-[145px]">
      <p className="text-gray-300 text-center font-thin text-xl pt-8">
        © Samuel Thompson, {new Date().getFullYear()} <br /> All Rights Reserved
      </p>
      <ThemeSelector />
    </div>
  );
}
