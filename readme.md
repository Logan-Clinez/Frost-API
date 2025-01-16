# Frost API

> A library for developers to easily create their own Rust Console Edition integrations such as discord bots using GPORTAL's API & WebSocket!

## Documentation

For a more in-depth documentation, refer to [GitBook](https://frosty-bot-api.gitbook.io/docs/)! You can also join our support [discord server](https://discord.gg/Frost3X)

## Installation

```bash
npm i frost-api
```

## Example Usage - TypeScript

```typescript
import { RCEManager, LogLevel, RCEEvent, RCEIntent } from "frost-api";

const rce = new RCEManager();
await rce.init({ username: "", password: "" }, { level: LogLevel.Info });

await rce.servers.addMany([
  {
    identifier: "server1", // A Unique Name For your Server To Be Recognised By
    region: "US", // It's Either EU or US
    serverId: 1387554, // Find This In The URL On Your Server Page
    intents: [RCEIntent.ConsoleMessages], // Specify Which WebSocket Subscriptions To Use
    playerRefreshing: true, // Enable Playerlist Caching
    radioRefreshing: true, // Enable RF Events
    extendedEventRefreshing: true, // Enable Bradley / Heli Events
  },
  {
    identifier: "server2",
    region: "EU",
    serverId: 1487367,
    intents: [RCEIntent.All],
  },
]);

rce.events.on(RCEEvent.PlayerKill, (data) => {
  console.log(
    `[${data.server.identifier}] ${data.killer.name} killed ${data.victim.name}`
  );

  // Send an in-game command to the Rust server by the unique identifier (kill-feed!)
  await rce.servers.command(
    data.server.identifier,
    `say <color=red>${data.killer.name}</color> killed <color=red>${data.victim.name}</color>`
  );
});

// Optional Methods
await rce.servers.add(SERVER_INFO); // Add A Single Server
await rce.servers.addMany([SERVER_INFO]); // Add Multiple Servers
rce.servers.remove("identifier"); // Remove A Server
rce.servers.removeAll(); // Remove All Servers
rce.servers.get("identifier"); // Get Server
await rce.servers.info("identifier"); // Get "serverinfo" Command Details
await rce.servers.command("identifier", "say Hello World"); // Send Command
rce.destroy(); // Gracefully Close Frost API
```
