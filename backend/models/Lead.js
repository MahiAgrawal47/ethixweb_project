import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxLength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Valid email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      maxLength: [20, 'Phone cannot exceed 20 characters']
    },
    company: {
      type: String,
      trim: true,
      maxLength: [120, 'Company name cannot exceed 120 characters'],
      default: ''
    },
    service: {
      type: String,
      required: [true, 'Please select a service'],
      trim: true
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxLength: [2000, 'Message cannot exceed 2000 characters']
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Converted', 'Closed'],
      default: 'New'
    }
  },
  {
    timestamps: true
  }
);

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
