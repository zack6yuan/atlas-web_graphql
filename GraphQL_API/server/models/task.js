#!/usr/bin/env node
// Task module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    id: Number,
    title: String,
    weight: Number,
    description: String
})

module.exports = mongoose.model('Task', taskSchema)