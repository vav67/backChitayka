 //const ddata = require('./data.json')
 //вы используете require для импорта модуля в среде, которая использует ES модули.
 // и вы продолжаете использовать ES модули 
 //("type": "module" в package.json), то вместо require
 // вам следует использовать import для импорта модулей.
 import { default as ddata } from './data.cjs';;

 const data = [
    
  {
      "id":1,
      "word": "верблюд",
      "level": 2,
      "image":"https://photoshop-kopona.com/uploads/posts/2018-09/1537459964_0-11.jpg",
      "width": 471,
      "heaight": 471,
      "read": false
  },
  {
      "id":2,
      "word": "кошка",
      "level": 2,
      "image":"https://photoshop-kopona.com/uploads/posts/2018-09/1537459909_0-1.jpg",
      "width": 682,
      "heaight": 800,
      "read": false
  } ,
 
      {
      "id":3,
      "word": "лошадь",
      "level": 2,
      "image": "https://photoshop-kopona.com/uploads/posts/2018-09/1537459959_0-4.jpg",
      "width": 384,
      "heaight": 500,
      "read": false
  
  
  },

  {
      "id":4,
      "word": "белка",
      "level": 2,
      "image": "https://amiel.club/uploads/posts/2022-03/1647578472_2-amiel-club-p-kartinki-zhivotnikh-dlya-prezentatsii-2.png",
      "width": 500,
      "heaight": 435,
      "read": false
 
  }

]
//const getAllData = async () => {    const data = await }
const getAllData = () => {
  return data
  //return data.default
}

//exports.getAllData = getAllData
export default getAllData