export default {
  path: "",
  getComponent: (location, callback) => {
    require.ensure([], () => {
      callback(null, require("components/AppContainer").default)
    })
  },
  getChildRoutes: (location, callback) => {
    require.ensure([], () => {
      callback(null, [
        {
          path: "/",
          getComponents: (location, callback) => {
            require.ensure([], () => {
              callback(null, {
                content: require("components/Home").default
              })
            })
          },
          getChildRoutes: (location, callback) => {
            require.ensure([], () => {
              callback(null, [
                {
                  path: "*",
                  getComponents: (location, callback) => {
                    require.ensure([], () => {
                      callback(null, {
                        content: require("components/NotFound").default
                      })
                    })
                  }
                }
              ])
            })
          }
        }
      ])
    })
  }
}
