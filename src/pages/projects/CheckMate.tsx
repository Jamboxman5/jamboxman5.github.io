import { useEffect } from "react";
import NavigationBar from "../../components/navbar/NavigationBar";

export default function CheckMate() {
  useEffect(() => {
    document.title = "Spigot Plugins";
  });

  return (
    <div className="themed-bg pt-40 pb-40 min-h-screen">
      <NavigationBar />
    </div>
  );
}
