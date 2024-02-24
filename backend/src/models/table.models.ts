import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
interface ITable {
  name: string;
  phone: string;
  email: string;
  hobbies: string;
}

const tableScheme: Schema<ITable> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hobbies: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
tableScheme.plugin(mongooseAggregatePaginate);
export const Table = mongoose.model<ITable>("Table", tableScheme);
