const path = require('path');


module.exports = {
    mode: 'development', // Para sabar si esta en desarrollo o producción
    entry: './src/index.js', //Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
         path: path.resolve(__dirname, 'dist'), //Carpeta de salida
   },
   module: {
    rules: [
        {
            test: /\.css$/,  //Regex para identificar archivos CSS
            use: ['style-loader', 'css-loader'], //Loaders para procesar archivos
        },
        {
            test: /\.js$/, //Regex para identificar archivos js
            exclude: /node_modules/, //Excluir la carpeta node_modules
            use: {
                loader: 'babel-loader', //Loader para convertir JS moderno al JS compatible con más navegadores
                options: {
                    presets: ['@babel/preset-env'],                     
                },
            },
        },
    ],
   },
   devtool: 'source-map', //Geración source maps para facilitar la depuración 
   devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'), //Carpeta del que correrá en el servidor
    },
     compress: true, //Habilitar comprensión gzip
     port: 9000, //Puerto del servicio de desarrollo
     
   } 
};