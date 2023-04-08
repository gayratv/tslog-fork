import { Logger } from '../src/index.js';

const logger = new Logger();
logger.attachFileTransport('./log/logs3.json');

logger.debug('I am a debug log.', { a: 1, b: 'петя' });
logger.info('Bro');
