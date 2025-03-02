[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO   -->
<br />
<p align="center">
  <a href="https://github.com/capcodigital/tech-radar">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Engineering Tech Radar</h3>

  <p align="center">
    A visual guide to provide a view of the current technology coverage of Capco Digital Engineering
    <br />
    <br />
    <a href="https://radar.capco.io">View Demo</a>
    ·
    <a href="https://github.com/capcodigital/tech-radar/issues">Report Bug</a>
    ·
    <a href="https://github.com/capcodigital/tech-radar/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#development">Development</a></li>
      <ul>
        <li><a href="#commands">Commands</a></li>
        <li><a href="#code-security-and-quality">Code security and quality</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Tech Radar](./demo.gif)

A visual guide to provide a view of the current technology coverage of Capco Digital Engineering.

### Built With

![typescript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white)
![d3.js](https://img.shields.io/badge/-D3.js-F9A03C?style=flat-square&logo=d3.js&logoColor=black)
![styled](https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white)

| Description                                                                | Link                                                  |
| :------------------------------------------------------------------------- | :---------------------------------------------------- |
| React - JavaScript library for building user interfaces                    | [React](https://github.com/facebook/create-react-app) |
| PlayWright - JavaScript E2E Testing Framework                              | [PlayWright](https://playwright.dev/)                 |
| React Testing Library - light-weight solution for testing React components | [React Testing Library](https://www.cypress.io/)      |
| Library that utilises tagged template literals to style React components   | [Styled Components](https://styled-components.com/)   |

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

```shell
# clone the repo
git clone https://github.com/capcodigital/tech-radar.git

# installs the dependencies
npm install
```

<!-- USAGE EXAMPLES -->

## Development

### Commands

- `npm start` - start the react app
- `npm test` - run unit tests
- `npm run cucumberTest` - run e2e ui tests

### Code security and quality
If using VSCode, install the Snyk extension to analyse the code security and quality.

![Screenshot](images/Snyk-vs-extension.png)

<!-- ROADMAP -->

### Deployment

The CI/CD pipline is done via the [Github Actions](https://github.com/capcodigital/tech-radar/actions) defined in [.github/workflows/main.yml](https://github.com/capcodigital/tech-radar/blob/master/.github/workflows/main.yml). Commits to all branches will trigger a deployment of the test version to Cloudflare Pages and then test automation will run against the preview. The deployed URL will be shown on the PR. 

Reference: https://github.com/capcodigital/tech-radar/wiki/Continuous-Integration-in-Tech-Radar

## Roadmap

See the [open issues](https://github.com/capcodigital/tech-radar/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute towards this repo, please request access to `uk-tech-radar-contributors` /  `uk-tech-radar-maintainers` GitHub team as required.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

If you would like to contribute to any Capco Digital OSS projects please read:

- [Code of Conduct](https://github.com/capcodigital/.github/blob/master/CODE_OF_CONDUCT.md)
- [Contributing Guidelines](https://github.com/capcodigital/.github/blob/master/CONTRIBUTING.md)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/capcodigital/tech-radar.svg?style=for-the-badge
[contributors-url]: https://github.com/capcodigital/tech-radar/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/capcodigital/tech-radar.svg?style=for-the-badge
[forks-url]: https://github.com/capcodigital/tech-radar/network/members
[stars-shield]: https://img.shields.io/github/stars/capcodigital/tech-radar.svg?style=for-the-badge
[stars-url]: https://github.com/capcodigital/tech-radar/stargazers
[issues-shield]: https://img.shields.io/github/issues/capcodigital/tech-radar.svg?style=for-the-badge
[issues-url]: https://github.com/capcodigital/tech-radar/issues
[license-shield]: https://img.shields.io/github/license/capcodigital/tech-radar.svg?style=for-the-badge
[license-url]: https://github.com/capcodigital/tech-radar/blob/master/LICENSE
