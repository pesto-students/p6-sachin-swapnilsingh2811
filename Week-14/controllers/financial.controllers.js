const Financial = require("../models/financial.models")

const getAll = async (req, res) => {
    try {
        console.log(req);
        const financials = await Financial.find({ user: req.user._id })
        res.json(financials)
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

const getCurrent = async (req, res) => {
    try {
        console.log(req);
        const currentYear = new Date().getFullYear()
        const financials = await Financial.find({ user: req.user._id, financialYear: currentYear })
        res.json(financials)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const placeFinancialRecord = async (req, res) => {
    try {
        const financial = new Financial({
            income: req.body.income,
            expenses: req.body.expenses,
            savings: req.body.savings,
            user: req.user._id,
            financialYear: req.body.year
        });
        await financial.save();
        res.send(financial);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

const getByYear = async (req, res) => {
    try {
        // console.log(req.params);
        const desiredYear = parseInt(req.params.year)
        if (!desiredYear) {
            throw new Error()
        }
        const financials = await Financial.find({ user: req.user._id, financialYear: desiredYear })
        res.json(financials)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteById = async (req, res) => {
    try {
        const paramId = req.params.id;
        if (!paramId)
            throw new Error()
        Financial.findByIdAndDelete(paramId, (error, data) => {
            if (error) {
                res.status(500).json({ error: error });
            } else {
                res.status(200).json({ message: "Financial data deleted successfully" });
            }
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAll,
    getCurrent,
    placeFinancialRecord,
    getByYear,
    deleteById
}