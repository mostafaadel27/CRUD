import {Router} from 'express'
const router =Router()
import { delet, getUser, signIn, signUp, update, userAbout,userPage } from './controller/user.js'
router.get('/user',userPage)
router.get('/user/about',userAbout)
router.get('/getuser',getUser)
router.post('/signup',signUp)
router.post('/signin',signIn)
router.patch('/user/:id',update) 
router.delete('/user/delete/:id',delet)





export default router