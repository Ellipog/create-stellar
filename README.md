# Create: Stellar 🌃

[![](https://img.shields.io/discord/834791723305009162?label=DISCORD&logo=discord&style=for-the-badge&color=blue)](https://discord.gg/stellar-834791723305009162)
[![](https://img.shields.io/badge/Curseforge-Stellar-orange?style=for-the-badge&logo=curseforge)](https://discord.gg/stellar-834791723305009162)

Github repo for the **Create: Stellar** modpack

If you have any suggestions or problems, feel free to post them in the [Issues](https://github.com/Ellipog/create-stellar/issues) tab!

For everything else, please use the Discord linked above.

## Innstallation & Contribution 🛠️

---

This repo uses [packwiz](https://github.com/packwiz/packwiz) which primarily makes it so you don't need the jar files for the mods, instead it uses TOML files which either Curseforge or Modrinth can utilize to download the modpack.<br>
[Official packwiz tutorial on exporting the pack](https://packwiz.infra.link/tutorials/hosting/curseforge/)

Any pull requests must include all of the changes made to the modpack, otherwise it will be ignored, since it will take a long time to find all of the changes myself.

KubeJS changes will have a higher priority than other changes, for example resource pack changes, since these are easier to go through and likely more useful.

If you have any questions regarding this, feel free to ask me on Discord, which is where I am most likely to respond.

## Documentation 📃

---

This pack heavily utilizes [KubeJS](https://github.com/KubeJS-Mods/KubeJS) to change recipes and add custom items which play a big role in the progression in the modpack.

KubeJS is a Minecraft mod which allows the use of JavaScript to add functionality to the game.

All textures for new items using KubeJS are in `KubeJS/assets/stellar`, everything else is in the resource pack called **Create Stellar**.

Recipes and all custom items are also in the KubeJS folder, and any changes will also happen in the same file location.

## File Structure 📦

---

Just a quick guide for locating all of the important files and folders.

```.
├── config/ - Default configs which are applied on installation
├── kubejs/
│ ├── assets - Resources for everything custom added through KubeJS
│ ├── server_scripts - Recipes
│ └── startup_scripts - Custom Items, Block, Fluids and more
├── mods/
├── resourcepacks/
│ └── Create Stellar - All texture changes from original mods/game
├── shaderpacks/ - Makes game look pretty
└── options.txt - Default options, mainly for applying resourcepack on installation
```
