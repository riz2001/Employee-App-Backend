const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {employeemodel}=require("./models/employee")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://rizwan2001:rizwan2001@cluster0.6ucejfl.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")



app.post("/addemployee",(req,res)=>{
    
    let input=req.body
    let employee=new employeemodel(input)


    console.log(employee)
    employee.save()
   
    
    res.json({status:"success"})

 
})

app.post("/search",(req,res)=>{
    
    let input=req.body
    employeemodel.find(input).then(
        (data)=>{
    res.json(data)
}
).catch(
    (error)=>
        res.json("error")
)

 
})


app.post("/delete",(req,res)=>{
    let input=req.body
    employeemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({status:"success"})
        }
    ).catch(
    (error)=>{
        res.json({"status":"fail"})
    }
)


    })



app.get("/viewemployee",(req,res)=>{
    employeemodel.find().then(
      (data)=>{
          res.json(data)
      }
    ).catch(
      (error)=>{
          alert(error.message)
      }
    )
  })
  
  
  



 
 


 
app.listen(8006,()=>{
    console.log("server started")
})