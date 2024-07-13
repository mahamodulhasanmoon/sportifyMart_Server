// Product.controller.ts
  import { RequestHandler } from 'express';
  import {  sendResponse } from '../../utils/sendResponse';
  import { catchAsync } from '../../utils/catchAsync';
import { handleMulterUpload } from '../../utils/handleUploader';


  export const createProductController: RequestHandler = catchAsync(async (req, res) => {
    // await uploadImageToCloudinary(req.file)
    // const result = await createProductService(req.body);
   const result = await handleMulterUpload(req.files)
   console.log(result);
   
    
    // console.log(files);
 
    sendResponse(res, {
      status: 201,
      success: true,
      message: 'Successfully created product',
      data: null,
    });
  });
  