const express=require('express');
const mongoose= require('mongoose');
const authroutes=require("./routes/authroutes");
const cors=require("cors");
const inputroutes=require("./routes/inputroutes");




const app=express();
require('dotenv').config()
app.use(cors({origin:true}));
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.dburl)
  .then(result=>{
    app.listen(9000);
    console.log("connected");
}).catch(err=>{
    console.log(err);
});
app.use(authroutes);
app.use('/input',inputroutes)
app.use('/',(req,res)=>{
  res.status(200).json({msg:"success"})
})
 
 
const compile = async function (templateName,data){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.ejs`)
 
    const html = await fs.readFile(filePath,'utf8')
    return hbs.compile(html)(data)
};
 
(async function() {
    try{
        const browser = await puppeteer.launch()
 
        const page = await browser.newPage()
 
        const content = await compile('index',data)
 
        await page.setContent(content)
 
        await page.pdf({
            path:'output.pdf',
            format:'A4',
            printBackground:true
        })
 
        console.log("done creating pdf")
 
        await browser.close()
 
        process.exit()
 
    }catch(e){
        console.log(e)
    }
})();




app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ success:false,message: message, data: data });
});
