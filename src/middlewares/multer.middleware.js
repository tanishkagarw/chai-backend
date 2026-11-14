import multer from "multer";


// apart from diskstorage we can use memorystorage(RAM)...but always prefer diskstorage(HDD, SSD)
const storage = multer.diskStorage({
    destination: function(ref, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})