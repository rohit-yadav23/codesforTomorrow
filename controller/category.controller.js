const Category = require("../model/category.model")


const createcategory = async (req, res) => {
    try {
        // console.log(req.body);

        const category = await Category.create(req.body);
        if (!category) {

            return res.status(409).json({ message: "category not found" });
        }
        res.status(201).json({ message: "create category", category });

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

const getcategorys = async (req, res) => {
    try {
        const category = await Category.find()
        res.status(200).json({message:"get category data",category});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);

    }
};
const getcategory = async (req, res) => {
    try {
        const category = await Category.findOne( { _id: req.params.id });
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
const updatecategory = async (req, res) => {
    const updateData = req.body;
    const categoryid = req.params.id;
    try {
        const category = await Category.updateOne({ _id: categoryid }, updateData);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deletecategory = async (req, res) => {
    try {
        const category = await Category.deleteOne({ _id: req.params.id })
        res.status(200).json(category);

    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = {
    getcategorys,
    getcategory,
    createcategory,
    updatecategory,
    deletecategory,
};