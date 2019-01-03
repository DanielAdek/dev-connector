import express from 'express';

const router = express.Router();

router
  .all('/*', (req, res) => res
    .status(404)
    .jsend.fail({ message: 'Ooops! This endpoint does not exist' }));

export default router;
