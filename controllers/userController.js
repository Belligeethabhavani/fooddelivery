

import User from "../models/User";

export async function UserPost(req, res) {
  try {
    const user = new User(req.body);
    console.log("data",req.body)
    console.log("user",user)
    await user.save();
    console.log("data",user)
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function GetUserData(_req, res) {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function UpdateUser(req, res) {
  try {
    const id = req.params.id;
    const updateDetails = req.body;
    const result = await User.updateOne({ _id: id }, { $set: updateDetails });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "User notFound" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

export async function DeleteUser(req, res) {
  try {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "User notFound" });
    }
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}