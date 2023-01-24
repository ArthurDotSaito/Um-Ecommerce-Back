import express from 'express';
import cors from 'cors';

// General  ---------------------------------------------------------------------------//

const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 5000;

// Server Response ------------------------------------------------------------------------//

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));