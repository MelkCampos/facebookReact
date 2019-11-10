module.exports = {
  presets: [
    // comandos que o navegador não entende como o "Import" e "Export"
    "@babel/preset-env",

    // comandos do "React" não entendidos pelo navegador
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};