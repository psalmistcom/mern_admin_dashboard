import mongoose from 'mongoose'

const OverallStatSchema = new mongoose.Schema(
    {
        totalCustomers: Number,
        yearlySalesTotal: Number,
        yearTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            { 
                month: String,
                totalSales: Number,
                totalUniits: Number,
            }
        ],
        dailyData: [
            {
                date:String,
                totalSales: Number,
                totalUnits: Number,
            }
        ],
        salesByCategory: {
            type: Map,
            of: Number
        }
    },
    { timestamps : true }
)

const OverallStat = mongoose.model("OverallStat", OverallStatSchema); 

export default OverallStat;