const Service = require("../model/service.model")


const getservices = async (req, res) => {
    try {
        const service = await Service.find()
        res.status(200).json(service);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);

    }
};
const getservice = async (req, res) => {
    try {
        const service = await Service.findOne({ _id: req.params.id });
        res.status(200).json(service);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};


const createservice = async (req, res) => {
    // const {} = req.body
    try {

        const service = await Service.create(req.body);
        res.status(201).json({ message: 'Create service successfully', service })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'service not Created', error });
    }
};

const updateservice = async (req, res) => {
    try {
        const updateData = req.body;
        const serviceId = req.params.id;
        const service = await Service.updateOne({ _id: serviceId }, updateData);
        res.status(200).json({ message: 'update service', service });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'service not update', error });

    }
};

const deleteservice = async (req, res) => {
    try {
        const service = await Service.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'delete service', service });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'service id not found', error });
    }
};

module.exports =
{
    getservices,
    getservice,
    createservice,
    updateservice,
    deleteservice
}