import { asyncHandler } from "./../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Table } from "../models/table.models.js";
import { StatusCodes } from "http-status-codes";

const insertTable = asyncHandler(async (req: Request, res: Response) => {
  console.log("control here");
  const { name, email, hobbies, phone } = req.body;

  const table = await Table.create({
    name,
    email,
    hobbies,
    phone,
  });
  if (!table) {
    throw new ApiError(StatusCodes.NOT_IMPLEMENTED, "Table not created");
  }

  res
    .status(StatusCodes.OK)
    .json(new ApiResponse(201, table, "Table created successfully"));
});

const deleteTable = asyncHandler(async (req: Request, res: Response) => {
  const table = await Table.findByIdAndDelete(req.params.id);
  if (!table) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Table not found");
  }
  res
    .status(StatusCodes.OK)
    .json(new ApiResponse(200, table, "Table deleted successfully"));
});

const getTables = asyncHandler(async (req: Request, res: Response) => {
  //   const tables = await Table.find();
  res.status(200).json(new ApiResponse(200, [], "Success"));
});

export { getTables, insertTable };
