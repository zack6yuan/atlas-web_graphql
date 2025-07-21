#!/usr/bin/env node
// Task module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project: String,
    id: Number,
    title: String,
    weight: Number,
    description: String
})

module.exports = mongoose.model('Project', projectSchema)