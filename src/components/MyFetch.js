import React, { useEffect, useState, memo } from "react";
import "./App.css";

function MyFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63cd7ff9ace6f33a22c58a90")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.record.bots);
        setIsLoading(false);
      });
  }, []);
  const [selectedBots, setSelectedBots] = useState([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <YourBotArmy selectedBots={selectedBots} />
      <div className="ac" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((bot) => (
          <div style={{ width: "18rem", margin: "10px" }}>
            <div
              className="card"
              onClick={() => setSelectedBots([...selectedBots, bot])}
            >
              <img
                src={bot.avatar_url}
                className="card-img-top"
                alt={bot.name}
              />
              <div className="card-body">
                <h5 className="botName card-title">{bot.name}</h5>
                <div style={{ display: "flex" }}>
                  <p
                    className="Health card-text"
                    style={{ marginRight: "40px", fontSize: "25px" }}
                  >
                    ⚕️ : {bot.health}{" "}
                  </p>
                  <p className="damage card-text">☠ : {bot.damage}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    className="Armor card-text"
                    style={{ marginRight: "40px" }}
                  >
                    🛡️ : {bot.armor}
                  </p>
                  <p className="Class card-text">⚔️ : {bot.bot_class}</p>
                </div>
                <p className="Catchphrase card-text">
                  <h5> Catchphrase:</h5>
                  <h6>{bot.catchphrase}</h6>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const YourBotArmy = memo(({ selectedBots }) => {
  return (
    <div className="yourBot">
      {selectedBots.map((selectedBot) => (
        <div>
          <h3>Your Selected Bot</h3>
          <div className="ac" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="card">
          <img
            src={selectedBot.avatar_url}
            className="card-img-top"
            alt={selectedBot.name}/>
                <h5 className="botName card-title">{selectedBot.name}</h5>
                <div style={{ display: "flex" }}>
                  <p
                    className="Health card-text"
                    style={{ marginRight: "40px", fontSize: "25px" }}
                  >
                    ⚕️ : {selectedBot.health}{" "}
                  </p>
                  <p className="damage card-text">☠ : {selectedBot.damage}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    className="Armor card-text"
                    style={{ marginRight: "40px" }}
                  >
                    🛡️ : {selectedBot.armor}
                  </p>
                  <p className="Class card-text">⚔️ : {selectedBot.bot_class}</p>
                </div>
                <p className="Catchphrase card-text">
                  <h5> Catchphrase:</h5>
                  <h6>{selectedBot.catchphrase}</h6>{" "}
                </p>
              </div>
            </div>
            </div>
      ))}
    </div>
    
  );
});
export default MyFetch;
