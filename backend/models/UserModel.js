const mongooes = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongooes.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    {
        Timestamps:true
    }
);

userSchema.pre("save",async function name(next) {
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.method.matchpassword = async function(enterpassword) {
    return await bcrypt.compare(enterpassword,this.password)
}

const User = mongooes.model("User",userSchema)
module.exports = User;
