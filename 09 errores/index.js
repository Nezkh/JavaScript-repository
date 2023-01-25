const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const funcion = v => {
    if (typeof v === "number"){
        return 10 * v
    } throw new Error("El valor debe ser de tipo número")
}

const iNumero = "26"

try {
    const multi = funcion(iNumero)
} catch(n){
    logger.error(`Error de tipo de datos, por favor corregir a número`)
}