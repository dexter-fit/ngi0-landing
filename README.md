# Dexter landing project and dockerfile
Currently everything is packed into the `index.html` file, change as needed.
## Building the image
```sh
docker build -t dexter.fit.vutbr.cz/ngi0/landing:latest .
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
