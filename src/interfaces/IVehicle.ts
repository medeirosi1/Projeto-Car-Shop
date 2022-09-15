import { z } from 'zod';

const vehicleSchema = z.object({ 
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be at least 3 characters long' }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }).min(1900).max(2022),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be at least 3 characters long' }),
  status: z.boolean().optional(),
  buyValue: z.number({
    required_error: 'Buy value is required',
    invalid_type_error: 'Buy value must be a number',
  }).int(),
});

type IVehicle = z.infer<typeof vehicleSchema>;

export default IVehicle;
export { vehicleSchema };