module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/variables/_colors.scss";`
      },
    }
  }
}