const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
      
        "name":String,
        "salary":String,
        "departement":String
    }
)

let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}   