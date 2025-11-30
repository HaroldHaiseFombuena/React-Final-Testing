// babel.config.js (ES Module syntax)
export default { // <--- This is the fix
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',

    '@babel/preset-typescript'
  ],
};