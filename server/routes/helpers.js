import express from 'express';

const router = express.Router();

// default get endpoints
router.get('/', (req, res) => res.status(200).jsend.success({
  message: 'Welcome to the developer social network connector'
}));

router.get('/*', (req, res) => res.status(200).jsend.fail({
  message: 'This endpoint does not exist, check your url'
}));

router.post('/*', (req, res) => res.status(200).jsend.fail({
  message: 'This endpoint does not exist, check your url'
}));

router.put('/*', (req, res) => res.status(200).jsend.fail({
  message: 'This endpoint does not exist, check your url'
}));

router.delete('/*', (req, res) => res.status(200).jsend.fail({
  message: 'This endpoint does not exist, check your url'
}));

router.patch('/*', (req, res) => res.status(200).jsend.fail({
  message: 'This endpoint does not exist, check your url'
}));

export default router;
