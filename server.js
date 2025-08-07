import 'dotenv/config';

// Configurar el puerto para Azure Web App
process.env.PORT = process.env.PORT || '8080';
process.env.HOST = process.env.HOST || '0.0.0.0';

import './dist/server/entry.mjs';
