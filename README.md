# WebOS Typings

This repository contains typescript type definitions for luna services of LG's WebOS.
Both [Open Source Edition](https://www.webosose.org/docs/reference/ls2-api/ls2-api-index/) and [official LG](https://webostv.developer.lge.com/api/webos-service-api/intro-lunaservice/) are included. This should make it way more convenient to develop apps, either official or [homebrewed](https://github.com/webosbrew/webos-homebrew-channel)

Types were auto-generated directly from the docs using a [customer generator](https://github.com/Superd22/webos-typings-generator).

All of this is pretty WIP.

## What's included

- [x] Interfaces for return type of endpoints
- [x] Interfaces for return type of endpoints when subscribing
- [x] Enum of errors for a given endpoint

## Todo

- [ ] Interface for the service itself
- [ ] Base types for shared properties
- [ ] Discriminated union of services
