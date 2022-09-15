import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

const carSchema = vehicleSchema.extend({
  doorsQty: z.number().int().min(2).max(5),
  seatsQty: z.number().int().min(2).max(8),
});

type ICar = z.infer<typeof carSchema>;

export default ICar;
export { carSchema };