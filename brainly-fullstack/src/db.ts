import mongoose, {Schema, ObjectId} from 'mongoose'

const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
    username: {type: String, required: true, unique:true},
    password:  {type: String, required: true}
})

const contentTypes = ['image','video','article','audio']

const contentSchema = new Schema({
    link : String,
    type: {type: String, enum: contentTypes, required: true},
    title:{type: String, required: true},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    
})


const tagSchema = new Schema({
    title: {type: String, required:true, unique: true}
})


const linkSchema = new Schema({
    hash: {type:String, required:true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}

})


const userModel = mongoose.model("User",userSchema);
const contentModel = mongoose.model("Content",contentSchema);
const tagModel = mongoose.model("Tag",tagSchema);
const linkModel = mongoose.model("Link", linkSchema);


export {
    userModel,
    contentModel,
    tagModel,
    linkModel
}