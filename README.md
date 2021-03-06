<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** RyanGamingXbox, happi-discord-bot, Ubuntuify, ryansalazar0929@outlook.com, Happi (Discord Bot), A small discord bot project, I work on my free time. It's meant to be more of a general purpose bot for moderation, voice and more. This is just a small side project, so don't expect that much from it.
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/RyanGamingXbox/happi-discord-bot">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Happi (Discord Bot)</h3>

  <p align="center">
    A small discord bot project, I work on my free time. It's meant to be more of a general purpose bot for moderation, voice and more. This is just a small side project, so don't expect that much from it.
    <br />
    <a href="https://github.com/RyanGamingXbox/happi-discord-bot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/RyanGamingXbox/happi-discord-bot">View Demo</a>
    ·
    <a href="https://github.com/RyanGamingXbox/happi-discord-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/RyanGamingXbox/happi-discord-bot/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/67ff796efb8e462cb93e1a79834edaad)](https://app.codacy.com/gh/RyanGamingXbox/happi-discord-bot?utm_source=github.com&utm_medium=referral&utm_content=RyanGamingXbox/happi-discord-bot&utm_campaign=Badge_Grade)[![CodeFactor](https://www.codefactor.io/repository/github/ryangamingxbox/happi-discord-bot/badge)](https://www.codefactor.io/repository/github/ryangamingxbox/happi-discord-bot)


A small discord bot project, I work on my free time. It's meant to be more of a general purpose bot for moderation, voice and more. This is just a small side project, so don't expect that much from it.



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to download things you need to use the software and how to install them.

You require the following packages.

* npm
  
  A node.js package manager that usually comes with node itself. As long as you install node you should be able to use the command line utility.

  You can install an alternative package manager something like `yarn`.

Please note you also have to provide the api keys and tokens that the wrappers require.

This file **needs** to be located in `/src/app/config/api.json`

  ```json
  {
    "discord": "your-discord-token",
    "hypixel": "your-hypixel-token",
  }
  ```

To get these tokens (API keys), you will need to do the following.
 * [Discord](https://discord.com/developers/applications)

   <img src="https://cdn.discordapp.com/attachments/810692110034403338/810692166547406899/unknown.png"> </img>
   
   After clicking the link, log in and create a new Discord application by clicking the New Application button [as seen above](https://cdn.discordapp.com/attachments/810692110034403338/810692166547406899/unknown.png). You can name it anything you desire (as long as it does not go against Discord [Terms of Service](https://discord.com/terms) and their [API Terms of Service](https://discord.com/developers/docs/legal))

   <img src="https://cdn.discordapp.com/attachments/810692110034403338/810693791312642078/unknown.png"> </img>

   You'll need to go to the bot tab in the sidebar [as seen above](https://cdn.discordapp.com/attachments/810692110034403338/810693791312642078/unknown.png). This will let you create a bot as seen below.

   <img src="https://cdn.discordapp.com/attachments/810692110034403338/810695228368617472/unknown.png"> </img>

   You can create a bot and then copy the bot token and save it in the JSON format located above the tutorial. Please note you should not let anyone else see your token as this can let people access your bot's account.
 * Hypixel
   
   To create a Hypixel API key. You will need a minecraft account. If you do not have one, you can (but should not if you are not planning to play Minecraft) with the price of $24.99 ***(subject to change)***.

   If you have a minecraft account then you can log into minecraft and join the server `mc.hypixel.net`.

   After that you should do `/api` and copy your API key over to the JSON format located above.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RyanGamingXbox/happi-discord-bot.git
   ```
2. Install NPM packages
 * With npm
   ```sh
   npm ci
   ```
 * With yarn
   ```sh
   yarn install --production=true
   ```
   Please note, if you want to contribute, you will require the developer dependencies. You should remove the production flag from the above command.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/RyanGamingXbox/happi-discord-bot/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@Ubuntuify](https://twitter.com/Ubuntuify) - ryansalazar0929@outlook.com

Project Link: [https://github.com/RyanGamingXbox/happi-discord-bot](https://github.com/RyanGamingXbox/happi-discord-bot)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [othneildrew](https://github.com/othneildrew) - for the README template.
* All the fantastic creators and contributors of the node dependencies.






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RyanGamingXbox/happi-discord-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/RyanGamingXbox/happi-discord-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RyanGamingXbox/happi-discord-bot.svg?style=for-the-badge
[forks-url]: https://github.com/RyanGamingXbox/happi-discord-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/RyanGamingXbox/happi-discord-bot.svg?style=for-the-badge
[stars-url]: https://github.com/RyanGamingXbox/happi-discord-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/RyanGamingXbox/happi-discord-bot.svg?style=for-the-badge
[issues-url]: https://github.com/RyanGamingXbox/happi-discord-bot/issues
[license-shield]: https://img.shields.io/github/license/RyanGamingXbox/happi-discord-bot.svg?style=for-the-badge
[license-url]: https://github.com/RyanGamingXbox/happi-discord-bot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/RyanGamingXbox
