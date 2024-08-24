// Product.controller.ts
import { RequestHandler } from 'express';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { handleMulterUpload } from '../../utils/handleUploader';
import { bulkUpdateService, createProductService, deleteProductByIdService, getAllProducts, getProductByIdService, updateProductByIdService } from './product.service';

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

//  Get All Products
export const getAllProductController: RequestHandler = catchAsync(
  async (req, res) => {

    const result = await getAllProducts(req.query);
    sendResponse(res, {
      status: 201,
      success: true,
      message: 'product Data retrived successfully',
      data: result,
    });
  },
);
export const getProductByIdController: RequestHandler = catchAsync(
  async (req, res) => {

    const result = await getProductByIdService(req.params.id);
    sendResponse(res, {
      status: 201,
      success: true,
      message: 'product Data retrived successfully',
      data: result,
    });
  },
);
export const deleteProductByIdController: RequestHandler = catchAsync(
  async (req, res) => {

    const result = await deleteProductByIdService(req.params.id);
    sendResponse(res, {
      status: 201,
      success: true,
      message: 'product Data deleted successfully',
      data: result,
    });
  },
);
export const updateProductByIdController: RequestHandler = catchAsync(
  async (req, res) => {
    const imageInfo: any = await handleMulterUpload(req.files);
    const initialData = { ...imageInfo, ...req.body };
    
    if (!imageInfo.thumbnail) {
      initialData.thumbnail = req.body.thumbnail;
    }
    if (!imageInfo.imgUrl) {
      initialData.imgUrl = req.body.imgUrl;
    }

    const result = await updateProductByIdService(req.params.id,initialData);
    sendResponse(res, {
      status: 201,
      success: true,
      message: 'product Data update successfully',
      data: result,
    });
  },
);


export const bulkUpdateController: RequestHandler = catchAsync(
  async (req, res) => {

    const result = await bulkUpdateService(req.body);
    sendResponse(res, {
      status: 201,
      success: true,
      message: 'product Data update successfully',
      data: result,
    });
  },
);
