// Product.controller.ts
import { RequestHandler } from 'express';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { handleMulterUpload } from '../../utils/handleUploader';

export const createProductController: RequestHandler = catchAsync(
  async (req, res) => {
    const imageInfo: any = await handleMulterUpload(req.files);

    const initialData = { ...imageInfo, ...req.body };
    // await uploadImageToCloudinary(req.file)
    // const result = await createProductService(req.body);

    // console.log(files);

    sendResponse(res, {
      status: 201,
      success: true,
      message: 'Successfully created product',
      data: initialData,
    });
  },
);
