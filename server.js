const app = require('./app') // Import the configured app

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
