import { Request, Response } from "express";
import multer from "multer";
import path from "path";


export async function uploadProfileImage(req: Request, res: Response) {

    const fileName =  Date.now() + ".jpg"
    const __dirname = path.resolve();

    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, `${__dirname}/src/public/` )
        },
        filename: function(req, file, cb){
            cb(null, fileName )
        },
    })

    const upload = multer({storage}).single("file");

    upload(req, res, function(err) {
        if(err instanceof multer.MulterError) {
            return res.status(500).send(err)
        }else if (err) {
            
            return res.status(500).send(err)
        }

        return res.status(200).send({fileName: fileName })
    })
}