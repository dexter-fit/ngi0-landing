# NGI0 landing project and dockerfile
Using React, see bellow for usage. 
## Building the image
```sh
docker build -t dexter.fit.vutbr.cz/ngi0/landing:latest -f SSGDockerfile .
```
## Building the image with pre rendering
```shell
npm run build-ssg
```
```sh
docker build -t dexter.fit.vutbr.cz/ngi0/landing:latest -f SSGDockerfile .
```
## Running the image locally
```sh
docker run -p 80:80 dexter.fit.vutbr.cz/ngi0/landing:latest
```
## Cross-building and pushing the image
Verify that you have buildx installed by running

```sh
docker buildx
```
If so crossbuild the target image using
```sh
docker buildx build --platform linux/arm64  --push -t dexter.fit.vutbr.cz/ngi0/landing:latest .
```
replace `linux/arm64` with a comma separated list of values as needed.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start_dossie`

Runs the app in the development mode with Dossie data.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start_geo`

Runs the app in the development mode with Geovisualisation data.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Mind maps
Mind maps to help organize the `entry-points/fresh-start packs` that were mentioned on 2024-05-17.  
## Nix mind map
Nix project mind map depicting how NGI0 supported projects fit into the Nix ecosystem [excalidraw](https://excalidraw.com/#json=d8AbTfcfZ8WvSzPCcd2hd,MS6ngCYm4vUGkum_fzUYqg). 
