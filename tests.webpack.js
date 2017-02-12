const locations = [ "./client", "./server", "./src" ]
const getContext = location => require.context(location, true, /\.spec\.js/)
const contexts = locations.map(getContext)

contexts.forEach(context => context.keys().forEach(context))
