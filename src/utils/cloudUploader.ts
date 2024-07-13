import { v2 as cloudinary } from 'cloudinary';
import { CustomError } from '../errors/CustomError';
import httpStatus from 'http-status';
import path from 'path';
import fs from 'fs';
// import sharp from 'sharp';

const processedFile = async (file: any): Promise<string | unknown> => {
    if (!file) {
      throw new CustomError(httpStatus.NOT_ACCEPTABLE, 'File not found');
    }
    const imageBuffer = file.buffer;
  
    const uploadFolderPath = path.resolve(process.cwd(), 'uploads');
  
    if (!fs.existsSync(uploadFolderPath)) {
      fs.mkdirSync(uploadFolderPath);
    }
  
    const outputFileName = `${Date.now()}${path.extname(file.originalname)}`;
    const outputFilePath = path.resolve(uploadFolderPath, outputFileName);
  
    await fs.promises.writeFile(outputFilePath, imageBuffer);
    
    return outputFilePath;
  };

export const uploadImageToCloudinary = async (file: any) => {
  cloudinary.config({
    cloud_name: 'daftymluv',
    api_key: '552333679979823',
    api_secret: 'WuHFYzH4nRWBAfKcml3WLIxe3xo',
  });

  // upload file

  const compressedFileUrl: any = await processedFile(file);
  const {secure_url} = await cloudinary.uploader
    .upload(compressedFileUrl, {
      public_id: 'shoes',
    })
    .catch(error => {
      throw new CustomError(500,error.message);
    });

 return secure_url;
};
