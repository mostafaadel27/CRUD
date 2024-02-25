import sql from "../../../DB/conection.js"

export const  userPage =(req,res,next)=>{
    res.json({message:'user ok'})

}
export const  userAbout =(req,res,next)=>{
    res.json({message:'user about ok'})

}
export const getUser = (req,res,next)=>{
    sql.execute('select * from users',(err,result,fields)=>{
        if(err){
            res.json({message:'error',err})

        }else{
            res.json({message:'Done',result})

        }
    })
}


export const signUp=(req,res,next)=>{
    const{userName,email,password}=req.body;
    console.log(req.body)
    sql.execute(`insert into users (name,password,email) values ('${userName}','${password}','${email}')`,(err,result,fields)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            if (result.affectedRows==1) {
                res.json({message:'done',result})

            } else {
                res.json({message:'wrong',err})

            }

        }
    })
}







export const signIn=(req,res,next)=>{
    const{email,password}=req.body;
    sql.execute(`select * from users where email = '${email}' and password = '${password}'`,(err,result,fields)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            if(result.length>0){
                res.json({message:'done',result})

            }else{
                res.json({message:'wrong email or password',err})

            }
        }
    })
}










export const update =(req,res,next)=>{
    const {age ,phone}=req.body;
    const {id}=req.params;
    sql.execute(`update users set age=${age} , phone=${phone} where id=${id}`,(err,result,fields)=>{
        if (err) {
            res.json({message:'error',err})
        } else {
            if(result.affectedRows==1){
                res.json({message:'done',result})

            }else{
                res.json({message:'id error'})

            }

        }
    })
}



export const delet=(req,res,next)=>{
    const{id}=req.params
    sql.execute(`delete from users where id=${id}`, (err, result)=> { 
        if(err){
            res.json({message:'error',err})

        }else {
            if(result.affectedRows==1){
                res.json({message:'done',result})

            }else{
                res.json({message:'id error'})

            }

        }


    })
}