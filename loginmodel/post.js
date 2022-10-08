import { Sequelize } from "sequelize";

const postSchema= Sequelize.Schema({
    userID:{ type:String, require:true},
    desc:String,
    likes:[],
    image:String,

});

var post= Sequelize.model("post",postSchema)
export default post