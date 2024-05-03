const { successResp, errorResp } = require('../utils/apiResponse');
const Response = require('../models/responseModel')

const responseCtrl = {
    createResponse: async (req, res) => {
        try {
            const {response, createdBy} = req.body;
            const keys = Object.keys(response);
            if(keys.length == 0) return errorResp(res, 400, "Empty form.");
            
            const resp = new Response({
                createdBy,
                response,
            })

            await resp.save()
            return successResp(res, 200, {data: resp})
        } catch (err) {
            return errorResp(res, 500, err.message)
        }
    },
}

module.exports = responseCtrl
