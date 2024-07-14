// Product.controller.ts
import { RequestHandler } from 'express';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { handleMulterUpload } from '../../utils/handleUploader';
import { createProductService } from './product.service';

export const createProductController: RequestHandler = catchAsync(
  async (req, res) => {
    const imageInfo: any = await handleMulterUpload(req.files);
    const initialData = { ...imageInfo, ...req.body };
    const result = await createProductService(initialData);

    // console.log(files);

    sendResponse(res, {
      status: 201,
      success: true,
      message: 'Successfully created product',
      data: result,
    });
  },
);
