var util = require('./util');
function Plugin(){
	//单例模式,全局共享plugins
	if(Plugin.instance){
		return Plugin.instance;
	}else{
		this.plugins = {};
		return (Plugin.instance = this);
	}
}
Plugin.prototype.add = function(){

}
Plugin.prototype.delete = function(){

}
Plugin.prototype.get = function(){

}
Plugin.prototype.getAll = function(){

}
Plugin.prototype.reset = function(){

}
module.exports = new Plugin();