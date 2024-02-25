import { asyncHandler } from "./../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Table } from "../models/table.models.js";
import { StatusCodes } from "http-status-codes";

const insertTable = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, phone, hobbies } = req.body;

  const table = await Table.create({
    name,
    email,
    phone,
    hobbies,
  });
  if (!table) {
    throw new ApiError(StatusCodes.NOT_IMPLEMENTED, "Table not created");
  }

  res
    .status(StatusCodes.OK)
    .json(new ApiResponse(201, table, "Table created successfully"));
});

const deleteTable = asyncHandler(async (req: Request, res: Response) => {
  const { tableId } = req.body;
  const table = await Table.findByIdAndDelete(tableId);
  if (!table) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Table not found");
  }
  res
    .status(StatusCodes.OK)
    .json(new ApiResponse(200, table, "Table deleted successfully"));
});
// const

const getTables = asyncHandler(async (req: Request, res: Response) => {
  /**
   * for larger databases the code can be fetched in a paginated way by taking page and limit from the query
   */
  const tables = await Table.find();
  if (!tables) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Tables not found");
  }
  res.status(200).json(new ApiResponse(200, tables, "Success"));
});

export { getTables, insertTable };
