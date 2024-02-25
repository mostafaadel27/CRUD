import sql from "../../../DB/conection.js";


export const addProduct=(req,res,next)=>{
    const {name , description , price , userId}=req.body;

    sql.execute(`insert into proudects (name , description ,price , userId) values ('${name}','${description}',${price}, ${userId})`,(err,result,fields)=>{
        if (err) {
            res.json({message:'error',err})
        } else {
            if (result.affectedRows==1) {
                res.json({message:'done',result})
            } else {
                res.json({message:'error id'})
            }
        }
    })
}




export const allProducts=(req,res,next)=>{
    sql.execute(`select * from proudects`,(err,result,fields)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            if (result.length>0) {
                res.json({message:'done',result});

            } else {
                res.json({message:'no items yet'});

            }
        }
    })
}


export const productsInfo=(req,res,next)=>{
    sql.execute(`select proudects.name , users.name as userName ,  users.email ,proudects.description ,proudects.price ,proudects.id as P_ID , proudects.name from proudects inner join users on users.id=proudects.userId`,(err,result,fields)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            res.json({message:'done',result});

        }
    })
}


export const deleteProduct=(req,res,next)=>{
    const {id}=req.params
    sql.execute(`delete from proudects where id=${id}`,(err,result)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            if (result.affectedRows==1) {
                res.json({message:'done',result})

            } else {
                res.json({message:'wrong id',err})

            }
        }
    })
}



export const updateProduct=(req,res,next)=>{
    const{name,description,price}=req.body;
    const {id}=req.params
    sql.execute(`update proudects set name='${name}' , description='${description}' ,price=${price} where id = ${id}`,(err,result,fields)=>{
        if (err) {
            res.json({message:'error',err})
        } else {
            if (result.affectedRows==1) {
                res.json({message:'done',result})

            } else {
                res.json({message:'wrong id',err})

            }
        }
    })
}

export const productById=(req,res,next)=>{
    const {id}=req.params
    sql.execute(`select * from proudects where id=${id}`,(err,results)=>{
        if(err){
            res.json({message:'error',err})

    }else{
        res.json({message:'done',results})
    }
})
}