
const express =require('express');
const router =new express.Router()
const MenRanking =require('../models/mens')


//we will handle the post request 
router.post('/mens',async(req,res)=>{
    try{
      const addmenRecords= new MenRanking(req.body)
      console.log(addmenRecords);
      
      // addmenRecords.save()// this will store the body inside the mongodb compass
     const insertData= await  addmenRecords.save()
      //  for showing the data 
      res.send(insertData)
  
  }catch(e){
    res.status(400).send(e) //400 for bad request
  }
  })
  
  //for fetching all the data enteries
  router.get('/mens',async(req,res)=>{
    try
    {
      //  for show the data we have find method in simple monogb  db.find() 
     const showD= await MenRanking.find({}).sort({"ranking":1})
     res.status(201).send(showD)
    }
    catch(e)
    {
      res.status(400).send(e)
    }
  }) // yaha taak hume api mil jaye ge link for any browser
  
  //find the one document by its id
  
  router.get('/mens/:id',async(req,res)=>{
    try
    {
      //  for show the data we have find method in simple monogb  db.find() 
     const showoneD= await MenRanking.findById(req.params.id)
     res.status(201).send(showoneD)
    }
    catch(e)
    {
      res.status(400).send(e)
    }
  })
  
  // for updating the document
  router.patch('/mens/:id',async (req,res)=>{
    try
    {
      //  for show the data we have find method in simple monogb  db.find()
      const _id=req.params.id; 
     const updateD= await MenRanking.findByIdAndUpdate(_id,req.body,{new:true})  // chage bass req.body ka hai .. mean ju hum type kare ge edit karne ke lye wo body se req be kare ge na 
     console.log(updateD);
     res.status(201).send(updateD)
    }
    catch(e)
    {
      res.status(400).send(updateD)
    }
  })
  router.delete('/mens/:id',async (req,res)=>{
    try
    {
      //  for show the data we have find method in simple monogb  db.find()
      const _id=req.params.id; 
     const deleteD= await MenRanking.findOneAndDelete(_id)  // chage bass req.body ka hai .. mean ju hum type kare ge edit karne ke lye wo body se req be kare ge na 
     console.log(deleteD);
     res.status(201).send(deleteD)
    }
    catch(e)
    {
      res.status(400).send(updateD)
    }
  })
  // router.patch('/student/:id',async (req,res) =>{
  //   try{
  //    const _id= req.params.id;
  //    const updatedata=await Student.findByIdAndUpdate(_id,req.body,{new:true})
  //    res.send(updatedata);
  //   }
  //   catch(e){
  //       res.status(404).send(updatedata)
  //   }
  // })
  module.exports=router;