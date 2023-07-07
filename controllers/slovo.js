import Slovo from "../models/Slovo.js"
import { createError } from "../utils/error.js"



//export const createSlovo = async (req,res,next)=>{
    export const createSlovo = async (req, res,next)=>{
    
    console.log('ii=', req.body)
      const newSlovo = new Slovo(req.body) //новая запись  

    try{ 
 const savedSlovo =  await newSlovo.save()
 res.status(200).json(savedSlovo)
  }catch(err){
     next(err)     // res.status(500).json(err)
 }    

}


//export const getSlovos = async (req,res,next)=>{
    export const getSlovos = async (req,res, next)=>{
    try {
      const slovos = await Slovo.find();
      res.status(200).json(slovos); 
  //  res.status(200).send(slovos)
    //  res.send(slovos)
    } catch (err) {
     // res.status(500).send( 'ошибка')
     next(createError(500,"может ошибка"))
    }
  }

 

  export const getSlovostt = async (req,res,next)=>{
    try {
        
    const slovos = await Slovo.find();
    
    
    //  res.status(200).json(slovos); 

   res.status(200).send(slovos)
    //  res.send( 'Запущен tt')
   
    } catch (err) {
      next(err);
     // res.status(500).send( 'tt ошибка пробный')
    }
  }

   