# example

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## dev notes

npm run build
rsync -av ./dist/ ./examples/basic/node_modules/vue3-plugin-bootstrap5/dist/

ver=0.0.13
gh release create "${ver}" --prerelease --title "Vue3 Plugin Bootstrap 5 ${ver}" --notes "Carousel"
