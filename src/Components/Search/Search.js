import React, { useState } from "react";

function Search({ belirtHavaDurumu }) {
  const api = {
    key: "2a0d80b55ffc4ac0c357f46a5fb77e04",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [ara, setAra] = useState("");
  const arama = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?q=${ara}&units=metric&lang=tr&appid=${api.key}`)
        .then((data) => data.json())
        .then((sonuc) => {
          setAra("");
          belirtHavaDurumu(sonuc);
        });
    }
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Şehir Giriniz..."
        onChange={(e) => setAra(e.target.value)}
        value={ara}
        onKeyPress={arama}
      />
    </div>
  );
}

export default Search;
