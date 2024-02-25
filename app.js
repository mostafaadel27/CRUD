import  express  from 'express' 
import cors from 'cors'
import userRouter from './modules/user/user.router.js'
import prodectRouter from './modules/product/product.router.js'

const app =express()
app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(prodectRouter)

app.get('*',(req,res,next)=>{
   res.send('404 not found')
})
 app.listen(3000,()=>{
    console.log('running')
 })