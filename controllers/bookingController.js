const Booking = require('../models/bookingModel')
const Table = require('../models/tableModel')
const mongoose = require('mongoose')
// const createBooking = async (req,res)=>{
//     const {name,totalSeats} = req.body
//     try{
//        const tables = await Table.table.create({table:req.body})

//        res.status(200).json( {"name":name,"totalSeats":totalSeats})
//     }catch(error){
//        res.status(400).json({error:error.message})
//     }
//    }

const bookTable = async (req, res) => {
   try {
      const { bookingPaxs } = req.body
      const totalAvailableSeats = await Table.aggregate([
         {
            $match: { availability: true }
         }, {
            $group: {
               _id: null,
               totalAvailableSeats: {
                  $sum: '$availableSeats'
               }
            }
         }
      ])
      let totalAvailableSeatsInString = totalAvailableSeats[0].totalAvailableSeats
      //  .sort({ availableSeats : 'ascending'})
      if(bookingPaxs>totalAvailableSeatsInString){
         return res.status(400).json({error:"Our Tables dont have so many seats"})
       }

      const bookingTable = Table.aggregate([
         {
            $match: { availability: true }
         }, {
            $group: {
               _id: null,
               totalAvailableSeats: {
                  $sum: '$availableSeats'
               }
            }
         }
      ])
       res.status(200).json(totalAvailableSeatsInString)

   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

module.exports = {
   bookTable

}