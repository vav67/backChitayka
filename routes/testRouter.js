import express from "express"
const router = express.Router()

 
// define the home page route
router.get('/', (req, res) => {
  res.send('test  -error---')
})
 
//module.exports = router
export default router