import mongoose from "mongoose"

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    img: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

ImageSchema.post('findOneAndDelete', async function (doc) {
})

const Image = mongoose.model('Image', ImageSchema);

export { Image }
