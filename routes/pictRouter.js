import express from "express"
import   getAllData   from '../repozitory.js'
 //const { getAllData } = require('../repozitory')


const router = express.Router()
 
// define the home page route
router.get('/', async function(req, res)  {
 try{
    
  const data = await getAllData()
  res.send(data)
 } catch(e) {   console.log(e)   }


})
 
//module.exports = router
export default router