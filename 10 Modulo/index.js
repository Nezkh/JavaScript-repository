import * as math from './controller.js'
import chalk from 'chalk'

const multi= math.multiplicar(math.suma(1,2),math.suma(4,5))
console.log(chalk.green(multi));