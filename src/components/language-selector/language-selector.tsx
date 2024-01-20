// selectors
import { useSelector } from "react-redux";
import { useAppDispatch } from "@store/hooks/useAppDispatch";
// selector
import { selectCurrentLanguage } from "@store/slices/settings/settings.selectors";
// action
import { setLanguage } from "@store/slices/settings/settings.slice";

function LanguageSelector () {
  const currentLanguage = useSelector(selectCurrentLanguage);
  const dispatch = useAppDispatch();

  const handleChangeLanguage = (language: string) => {
    dispatch(setLanguage(language));
  };

  return (
    <div className="lang-selector">
      <label>Select Language:</label>
      <select className="lang-selector__select" value={currentLanguage} onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="es">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

export default LanguageSelector;