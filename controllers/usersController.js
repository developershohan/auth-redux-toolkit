import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import { findPublicId, isEmail, isMobile } from "../helpers/helpers.js";
import { fileDeleteFromCloud, fileUploadToCloud } from "../utils/cloudinary.js";
import bcrypt from "bcrypt";

/**
 * @description Get All User
 * @method GET
 * @route api/v1/user
 * @access public
 */

export const getAllUser = asyncHandler(async (req, res) => {
  // Get All User
  const users = await User.find();

  // Check Data
  if (users.length === 0) {
    res.status(400).json({ message: "No User Found" });
  }

  res.status(200).json({ users, message: "Users Data Loaded" });
});

/**
 * @description Get Single User
 * @method GET
 * @route api/v1/user/:id
 * @access public
 */

export const getSingleUser = asyncHandler(async (req, res) => {
  // Get Id
  const { id } = req.params;

  // Get User Data
  const user = await User.findById(id);

  // User Data Check
  if (!user) {
    return res.status(400).json({ message: "User Data Not Found" });
  }

  // Response
  res.status(200).json(user);
});

/**
 * @description Create User
 * @method POST
 * @route api/v1/user
 * @access public
 */

export const createUser = asyncHandler(async (req, res) => {
  // Get data from Form
  const { name, email, phone, password } = req.body;

  //   Form Validation
  if (!name || !email || !phone || !password) {
    res.status(400).json({ message: "All Fields Are Required" });
  }

  //   Check Valid Email Adress
  if (!isEmail(email)) {
    res.status(400).json({ message: "Invalid Email Address" });
  }

  //   Check Valid Phone Number
  if (!isMobile(phone)) {
    res.status(400).json({ message: "Invalid Phone Number" });
  }

  //   Check Duplicate Email Address
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    res.status(400).json({ message: `${email} address already exist` });
  }

  //   Check Duplicate Phone number
  const checkPhone = await User.findOne({ phone });
  if (checkPhone) {
    res.status(400).json({ message: `${phone} number already exists` });
  }

  //   Check File data
  let fileData = null;
  if (req.file) {
    const data = await fileUploadToCloud(req.file.path);

    fileData = data.secure_url;
  }

  //   Hash Password
  const passEncrypt = await bcrypt.hash(password, 10);

  //   Create New User
  const user = await User.create({
    name,
    email,
    phone,
    password: passEncrypt,
    photo: fileData,
  });

  //   Response
  res
    .status(201)
    .json({ user: user, message: "User Data Created Successfully" });
});

/**
 * @description Delete User
 * @method Delete
 * @Route api/v1/user/:id
 * @access public
 */

export const deleteUser = asyncHandler(async (req, res) => {
  // Get User
  const { id } = req.params;

  // Delete User
  const user = await User.findByIdAndDelete(id);

  // Delete photo from Cloud
  await fileDeleteFromCloud(findPublicId(user.photo));

  // Response
  res.status(200).json({ user, message: "User Data Deleted Successfully" });
});

/**
 * @description Update User
 * @method PUT/PATCH
 * @Route api/v1/user/:id
 * @access public
 */

export const updateUser = asyncHandler(async (req, res) => {
  // Get User id
  const { id } = req.params;

  // Get user Data
  const { name, email, phone } = req.body;

  // Email exist validation
  if (!isEmail(email)) {
    res.status(400).json({ message: "Entered Email Already Exists" });
  }

  // Phone Validation
  if (!isMobile(phone)) {
    res.status(400).json({ message: "Entered Phone Already Exists" });
  }

  // Update User
  const user = await User.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true }
  );

  res.status(200).json({ user, message: "User Data Update Successfull" });
});
