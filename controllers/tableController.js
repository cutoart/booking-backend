const Table = require('../models/tableModel')
const mongoose = require('mongoose')
const createTable = async (req,res)=>{
    const {tableName,totalSeats} = req.body
    try{
       const table = await Table.create({tableName, totalSeats, availableSeats:totalSeats})
      //  .then((data)=>{
      //     Table.aggregate([
      //       {
      //          "$group": {
      //             "_id": null,
      //             "totalavailableSeats": { 
      //                 "$sum": { "$sum": "$table.totalSeats" } 
      //             }
      //         }
            
      //    }])
      //  })
       
       res.status(200).json(table)
       console.log(table)
    }catch(error){
       res.status(400).json({error:error.message})
    }
   }

   const getTables = async (req,res)=>{
    try{
       const tables = await Table.find({availability:true})
       res.status(200).json(tables)
    }catch(error){
       res.status(400).json({error:error.message})
    }
   }

   const updateTable = async (req,res)=>{
     
      try{
         const id = req.params.id;
         const table = await Table.findOneAndUpdate({_id:id},{availability: false})
              
         
          res.status(200).json(table)
       
      }catch(error){
         res.status(400).json({error:error.message})
      }
     }
     
   module.exports = {
    createTable,getTables,updateTable
    
}