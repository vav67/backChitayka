import express from "express"
//import Slovo from "../models/Slovo"
 // import { createSlovo, getSlovos } from "../controllers/slovo"
// import Slovo from "../models/Slovo"
/////import Slovo from "../models/Slovo.js"
import { createSlovo, getSlovos } from "../controllers/slovo.js"
 
const router = express.Router()

 

router.post("/",  createSlovo )

// router.post('/', async function(req, res)  {
//      const newSlovo = new Slovo(req.body) //новая запись  
//     try{ 
//  const savedSlovo =  await newSlovo.save()
//  res.status(200).json(savedSlovo)
//   }catch(err){
//      next(err)     // res.status(500).json(err)
//  }    

// })

router.get("/", getSlovos )

  // router.get("/", async function(req, res)  { //все выбрать      
  //   try {
  //     const slovos = await Slovo.find();
  //     res.status(200).json(slovos);
  //   } catch (err) {
  //     next(err);
  //   }
  // } )


export default router

 