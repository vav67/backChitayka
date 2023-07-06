import express from "express"
const router = express.Router()

 
// define the home page route
router.get('/', (req, res) => {
  res.send('test 6-07')
})
 
//module.exports = router
export default router