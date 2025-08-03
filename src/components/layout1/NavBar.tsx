import { useThemeChanger } from "@/hooks/useThemeChanger";
import { FaPuzzlePiece } from 'react-icons/fa';

export default function NavBar({
  handleToggle,
  isToggled,
}: {
  handleToggle: () => void;
  isToggled: boolean;
}) {
  const {toggleTheme,isThemeDark} = useThemeChanger();
  
  return (
    <div className="navbar">
      <div className="logo">
        <span id="toggle-button" onClick={handleToggle}>
          {isToggled ? "\u2716" : "\u2630"}
        </span>
        <span> <FaPuzzlePiece className="mr-2 " /></span>
        Your Company
      </div>
      <div className="nav-list">
        <ul>
          <li onClick={toggleTheme}><i className={`fas fa-${isThemeDark ? 'sun':'moon'}`}></i></li>
          <li>Link 1</li>
        </ul>
      </div>
    </div>
  );
}
