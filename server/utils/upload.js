import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';




const storage = new GridFsStorage({
    url:'mongodb://rajputpriyyyyyaa:pr566677766776677@ac-cjyimom-shard-00-00.1jbs3nn.mongodb.net:27017,ac-cjyimom-shard-00-01.1jbs3nn.mongodb.net:27017,ac-cjyimom-shard-00-02.1jbs3nn.mongodb.net:27017/?ssl=true&replicaSet=atlas-f0xcr9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0',
    options: {useUnifiedTopology:true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 