import "./styles.css";

import { useState } from "react";
import "./styles.css";

const gameDb = {
  ActionGames: [
    {
      name: "God of War",
      rating: "9.6",
      overview:
        "After wiping out the gods of Mount Olympus, Kratos moves on to the frigid lands of Scandinavia, where he and his son must embark on an odyssey across a dangerous world of gods and monsters."
    },
    {
      name: "Red Dead Redemption II",
      rating: "9.7",
      overview:
        "Amidst the decline of the Wild West at the turn of the 19th century, outlaw Arthur Morgan and his gang struggle to cope with the loss of their way of life."
    },
    {
      name: "Deathloop",
      rating: "8.0",
      overview:
        "An assassin is caught in a deadly time-loop on an island full of enemies. In order to succeed, he'll have to die, die and die again."
    },
    {
      name: "Cobra Kai",
      rating: "8.1",
      overview:
        "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi."
    },
    {
      name: "Grand Theft Auto V",
      rating: "9.5",
      overview:
        "Three very different criminals team up for a series of heists in the corrupt city of Los Santos."
    }
  ],

  AdventureGames: [
    {
      name: "Grand Theft Auto V",
      rating: "9.5",
      overview:
        "Three very different criminals team up for a series of heists in the corrupt city of Los Santos."
    },
    {
      name: "Deathloop",
      rating: "8.0",
      overview:
        "An assassin is caught in a deadly time-loop on an island full of enemies. In order to succeed, he'll have to die, die and die again."
    },
    {
      name: "Cobra Kai",
      rating: "8.1",
      overview:
        "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi."
    },
    {
      name: "God of War",
      rating: "9.6",
      overview:
        "After wiping out the gods of Mount Olympus, Kratos moves on to the frigid lands of Scandinavia, where he and his son must embark on an odyssey across a dangerous world of gods and monsters."
    },
    {
      name: "Red Dead Redemption II",
      rating: "9.7",
      overview:
        "Amidst the decline of the Wild West at the turn of the 19th century, outlaw Arthur Morgan and his gang struggle to cope with the loss of their way of life."
    }
  ],
  BattleRoyaleGames: [
    {
      name: " Apex Legends",
      rating: "7.3",
      overview:
        "A battle Royale set in the Titanfall universe, focusing on hero and team based combat."
    },
    {
      name: "Fortnite",
      rating: "4.7",
      overview:
        "A cooperative shooter-survival game for up to four players to fight off zombie-like husks, defend objects with fortifications you can build, and a battle royale mode where up to 100 players fight to be the last person standing."
    },
    {
      name: "PlayerUnknown's Battlegrounds",
      rating: "6.5",
      overview:
        "A Battle Royale begins when one hundred players parachute onto an island."
    }
  ],
  RacingGames: [
    {
      name: " Project Cars ",
      rating: "6.8",
      overview:
        "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter."
    },
    {
      name: "Gran Turismo 6",
      rating: "5.9",
      overview:
        "The sixth part of the Gran Turismo series include over 1200 cars, the Vision Gran Turismo cars, improvements to the car customization options, and partnerships with the Goodwood Festival of Speed, the Ayrton Senna Institute, FIA and NASA."
    },
    {
      name: "Need for Speed: Rivals",
      rating: "6.2",
      overview:
        "A rivalry between cops and racers has broken out in Redview County. Racers are constantly breaking the law - Cops are constantly saving it. Take on the role of a Racer or Cop, with each side of the law offering its own play style."
    },
    {
      name: "Forza Motorsport 4 ",
      rating: "8.2",
      overview:
        "Fourth installment in the series with over 500 cars, and introducing Autovista, a game mode in which players can view precise details such as engine parts and interior gauges on a select number of cars."
    }
  ]
};

export default function App() {
  const [selectedGame, setGame] = useState("ActionGames");
  function gameClickHandler(game) {
    setGame(game);
  }
  return (
    <div className="App">
      <h1> game Recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are my recommendations of Games.{" "}
      </p>
      <div>
        {Object.keys(gameDb).map((game) => (
          <button className="Btn" onClick={() => gameClickHandler(game)}>
            {game}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gameDb[selectedGame].map((game) => (
            <li className="game" key={game.name}>
              {" "}
              <div class="divz" style={{ fontSize: "larger" }}>
                {" "}
                {game.name}{" "}
              </div>
              <div class="divz" style={{ fontSize: "smaller" }}>
                {" "}
                {game.rating}{" "}
              </div>
              <div class="divz" style={{ fontSize: "smaller" }}>
                {" "}
                {game.overview}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
