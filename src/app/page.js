
import { MenuContextProvider } from "./context/MenuContext";
import MainContent from "./components/mainContent";

export default function Home() {
  return (
    <MenuContextProvider>
      <MainContent />
    </MenuContextProvider>
  );
}
