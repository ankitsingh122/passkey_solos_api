import { Route, Controller, Tags, Post, Body, Get, Security, Query, Put, FormField, UploadedFile, UploadedFiles, Delete } from 'tsoa'
import { IResponse } from '../utils/interfaces.util';
import { Request, Response } from 'express'

@Tags('Admin')
@Route('api/admin')
export default class AdminController extends Controller {
    req: Request;
    res: Response;
    userId: string
    constructor(req: Request, res: Response) {
        super();
        this.req = req;
        this.res = res;
        this.userId = req.body.user ? req.body.user.id : ''
    }

//     @Post("/login")
//     public async login(@Body() request: { email: string, password: string }): Promise<IResponse> {
//         try {
//             const { email, password } = request;
//             const validatedUser = validateAdmin({ email, password });
//             if (validatedUser.error) {
//                 throw new Error(validatedUser.error.message)
//             }
//             const exists = await findOne(adminModel, { email });
//             if (!exists) {
//                 throw new Error('Admin doesn\'t exists!');
//             }
//             // check if blocked
//             if (exists?.isBlocked) {
//                 throw new Error('Admin is not approved yet!');
//             }
//             const isValid = await verifyHash(password, exists?.password);
//             if (!isValid) {
//                 throw new Error('Password seems to be incorrect');
//             }
//             const token = await signToken(exists?._id, { access: 'admin' })
//             delete exists?.password
//             return {
//                 data: { ...exists, token },
//                 error: '',
//                 message: 'Login Success',
//                 status: 200
//             }
//         }
//         catch (err: any) {
//             logger.error(`${this.req.ip} ${err.message}`)
//             return {
//                 data: null,
//                 error: err.message ? err.message : err,
//                 message: '',
//                 status: 400
//             }
//         }
//     }

//     @Security('Bearer')
//     @Delete('/deleteAminitiesDetail')
//     public async deleteAminitiesDetail(@Query('id') id: string): Promise<IResponse> {
//         try {
//             // Find the property detail by ID and remove it
//             const response = await deleteById(aminitiesModel, id)
//             if (!response) {
//                 return {
//                     data: null,
//                     error: 'Aminities detail not found',
//                     message: 'Aminities detail not found',
//                     status: 404,
//                 };
//             }
//             return {
//                 data: null,
//                 error: '',
//                 message: 'Aminitie details deleted successfully',
//                 status: 200,
//             };
//         } catch (err: any) {
//             logger.error(`${this.req.ip} ${err.message}`);
//             return {
//                 data: null,
//                 error: err.message ? err.message : err,
//                 message: 'Error deleting Aminitie details',
//                 status: 400,
//             };
//         }
//     }

//     @Security('Bearer')
//     @Get("/GetAminities")
//     public async GetAminities(@Query('pageNumber') pageNumber: number,
//         @Query('pageSize') pageSize: number,
//         @Query('filter') filter: string): Promise<IResponse> {
//         try {
//             let payload: any = {};
//             if (filter) {
//                 payload = {
//                     $or: [
//                         {
//                             iconName: {
//                                 $regex: filter,
//                                 $options: 'i'
//                             }
//                         }
//                     ]
//                 };
//             }
//             const data = await getAll(aminitiesModel, payload, +pageNumber, +pageSize);
//             return {
//                 data: data || {},
//                 error: '',
//                 message: 'Aminity Fetched Succesfully',
//                 status: 200
//             }
//         }
//         catch (err: any) {
//             logger.error(`${this.req.ip} ${err.message}`)
//             return {
//                 data: null,
//                 error: err.message ? err.message : err,
//                 message: '',
//                 status: 400
//             }
//         }
//     }

//     @Security('Bearer')
//     @Post("/createProperty")
//     public async createProperty(
//         @FormField('propertyId') propertyId?: string,
//         @FormField('propertyName') propertyName?: string,
//         @FormField('location') location?: string,
//         @FormField('description') description?: string,
//         @FormField('area') area?: number,
//         @FormField('propertyType') propertyType?: string,
//         @FormField('interestPerAnnum') interestPerAnnum?: number,
//         @FormField('price') price?: number,
//         @FormField('dueDate') dueDate?: string,
//         @FormField('MonthlyFees') MonthlyFees?: number,
//         @FormField() aminities?: Array<{
//             id: string,
//             value: string,
//             label: string,
//             image: string,
//         }>,
//         @UploadedFile('imageURL') imageFile?: Express.Multer.File,
//         @UploadedFile('propertyDocument') propertyDocumentFile?: Express.Multer.File
//     ): Promise<IResponse> {
//         try {
//             let aminity: any[] = [];
//             if (aminities && typeof aminities === 'string') {
//                 aminity = JSON.parse(aminities);
//             }

//             const validatedProperty = validatePropertyDetails({
//                 propertyName,
//                 location,
//                 description,
//                 area,
//                 propertyType,
//                 interestPerAnnum,
//                 price,
//                 dueDate,
//                 MonthlyFees,
//                 aminities: aminity,
//                 imageURL: imageFile?.filename,
//                 propertyDocument: propertyDocumentFile?.filename
//             });

//             if (validatedProperty.error) {
//                 throw new Error(validatedProperty.error.message);
//             }

//             const adminData = await findOne(adminModel, { _id: this.userId });
//             const conversionrate = adminData.conversionRate;
//             const redToken = price !== undefined ? price * conversionrate : 0;

//             const payload: any = {
//                 propertyName: propertyName ?? "",
//                 location: location ?? "",
//                 description: description ?? "",
//                 propertyDetails: {
//                     area: area ?? 0,
//                     propertyType: propertyType ?? "",
//                     interestPerAnnum: interestPerAnnum ?? 0,
//                     price: price ?? 0,
//                     dueDate: dueDate ?? "",
//                     MonthlyFees: MonthlyFees ?? 0,
//                 },
//                 aminities: aminity ?? "",
//             };

//             const fileImage = imageFile
//                 ? await UploadedFileToAWS(imageFile.originalname, imageFile.buffer, imageFile.mimetype.includes('image/png') ? "image/png" : "image/jpeg")
//                 : undefined;

//             const documentFile = propertyDocumentFile
//                 ? await UploadedFileToAWS(propertyDocumentFile.originalname, propertyDocumentFile.buffer, propertyDocumentFile.mimetype.includes('application/pdf') ? "application/pdf" : "application/pdf")
//                 : undefined;

//             if (fileImage) {
//                 payload.imageURL = fileImage;
//             }
//             if (documentFile) {
//                 payload.propertyDocument = documentFile;
//             }

//             const saveResponse = propertyId
//                 ? await upsert(propertyDetailsModel, payload, propertyId)
//                 : await upsert(propertyDetailsModel, payload);

//             const response = await findOne(adminModel, { _id: this.userId });
//             const currentRedTokens = +response.totalRedToken;
//             const totalRedTokens = redToken + currentRedTokens;

//             await upsert(adminModel, { totalRedToken: totalRedTokens }, this.userId);

//             const notifictions = await upsert(notificationsModels, {
//                 notifications: "Property created....",
//                 view: true,
//                 type: "admin",
//                 propertyCreateId: saveResponse._id,
//                 message: "Property created..."
//             });

//             if (!saveResponse || !notifictions) {
//                 throw new Error("Error");
//             }

//             return {
//                 data: { ...saveResponse.toObject(), ...notifictions.toObject() },
//                 error: "",
//                 message: "Property created successfully",
//                 status: 200
//             };
//         } catch (err: any) {
//             logger.error(`${this.req.ip} ${err.message}`);
//             return {
//                 data: null,
//                 error: err.message || err,
//                 message: "",
//                 status: 400
//             };
//         }
//     }
}