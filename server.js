import 'dotenv/config';

// Configurar el puerto para Azure Web App
process.env.PORT = process.env.PORT || '8080';

import './dist/server/entry.mjs';
