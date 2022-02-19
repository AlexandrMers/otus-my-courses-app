import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  id: string;
  name: string;
  login: string;
});
