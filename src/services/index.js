const services = [
  "./message",
  "./user"
]

module.exports = function () {
  const app = this

  services.forEach(service => app.configure(require(service)))
}
