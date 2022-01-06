# Tymeshift Locations

Live deployment: https://bspolidorio.github.io/tymeshift-challenge

This was my submission to the [Tymeshift recruitment challenge](https://github.com/Tymeshift/react-code-test).

## Running the Application

This is pretty much a vanilla create-react-app, so what you're used to with `react-scripts` works:

- `npm start` - starts the development server
- `npm build` - creates a production-grade build of the app
- `npm format` - runs the prettier agains the codebase

## Project Structure

Hopefully the approach isn't hard to follow, but I've stick with this structure:

```sh
src/
├── api
│   ├── dtos
│   ├── mappers
│   ├── models
│   └── services
├── assets
├── components
│   ├── Header
│   ├── LocationCard
│   └── LocationModal
├── constants
├── redux
│   └── locations
├── pages
│   └── Locations
└── styles
```

Where:

- `src/api` - this'd where most of the actual domain logic of the app lives (mappers, data retrieval, ...)

- `src/components` - this directory contains a set of presentational components.

- `src/pages` - components with most of the applicational logic/state.

- `src/redux` - There was no reason to use Redux in this project other than to show that I know how to use this tool if the project scales.

## Remarks & Next Steps

For this project I stuck with I'm familiar with (the stack I'm more comfortable with):

- [create-react-app](https://create-react-app.dev/) was used as the app boilerplate
- [redux](https://redux.js.org/) was used as the state container
- [styled-components](https://github.com/styled-components/styled-components) to style the components
- [react-router](https://github.com/ReactTraining/react-router) to enable shareable URLs for the locations
- [luxon](https://moment.github.io/luxon/) to deal with the date parsing/formatting

With more time (and in a real World scenario), I'd probably focus on the following things:

- Make sure that the user always have the information about the data, like, when the content is loading, if the api call fails the user also get a warning to not be waiting for eternity.

- Create some tests for this project

- Create a library to use the icons as components

- I also didn't quite get the time requirement - I assumed it relates to the `createdAt` property returned by the API, but I'm failing to see how just the creation **time** (without the date) would be relevant. I formatted the time according to the design.

- As the app has a single page, I also assumed that storing the view counters in the container's state would suffice (which would mean the loss of that state if/when the container gets unmounted).
