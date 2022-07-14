module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],//es5'e döndürür tüm es'leri
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  };
  