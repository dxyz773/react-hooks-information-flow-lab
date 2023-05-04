function Header({ isDarkMode, setDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={setDarkMode}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
