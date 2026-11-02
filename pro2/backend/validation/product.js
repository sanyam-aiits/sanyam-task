const zod = require("zod");

const productSchema = zod.object({
    name: zod.string().min(3),
    price: zod.number(),
    description: zod.string().min(3),
    like: zod.number(),
    discount: zod.number(),
    status: zod.boolean(),
    category: zod.string(),
});

exports.productSchema = productSchema;