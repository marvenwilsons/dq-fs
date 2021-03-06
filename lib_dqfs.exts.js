const dqfs = require('./lib_dqfs')
class sy {
    constructor() {
        this.response = undefined
    }
    cd(path){
        try{
            dqfs.cd(path)
        }catch(e){
            throw e
        }
        
        return this
    }
    ls(absolutePath,options){
        this.response = dqfs.ls(absolutePath,options)
        return this
    }
    touch(file,content){
        dqfs.touch(file,content)
        return this
    }
    mkdir(file){
        dqfs.mkdir(file)
        return this
    }
    rmdir(){

    }
    rm(path){
        dqfs.rm(path)
        return this
    }
    cp(origin,dist){
        dqfs.cp(origin,dist)
        return this
    }
    mv(frm,to){
        dqfs.mv(frm,to)
    }
    lkdir(){
        
    }
    // done
    sortByName(modes) {
        const arr = this.finalVal.reverse()
        this.finalVal = arr
        return this
    }
    sortBySize(modes) {
        const modeIsUndef = modes == undefined
        const modeAccpt = typeof modes == 'string'
        const sadThrow = m => {throw `${m}`}
        const opts = ['asc','dec']
        const acs = () => {this.finalVal = this.finalVal.sort((a,b) => a.size-b.size)}
        const dec = () => {this.finalVal = this.finalVal.sort((a,b) => b.size-a.size)}

            
        typeof modes != 'string' && modes != undefined && sadThrow(`Eroor In SortBySize: arg should only be a type of string`)

        if(modeAccpt && !modeIsUndef){
            if(opts.indexOf(modes) != -1){
                opts.indexOf(modes) == 0 && acs()
                opts.indexOf(modes) == 1 && dec()
            }else{
                sadThrow(`Error In SortBySize: arg ${modes} is not recognize, only asc and dec`)
            }
        }
        
        return this
    }
    // done
    sortByNumberDirItems(modes) {
        const modeIsUndef = modes == undefined
        const modeAccpt = typeof modes == 'string'
        const sadThrow = m => {throw `${m}`}
        const opts = ['asc','dec']
        const acs = () => {this.finalVal = this.finalVal.sort((a,b) => a.size-b.items)}
        const dec = () => {this.finalVal = this.finalVal.sort((a,b) => b.size-a.items)}

            
        typeof modes != 'string' && modes != undefined && sadThrow(`Eroor In SortBySize: arg should only be a type of string `)

        if(modeAccpt && !modeIsUndef){
            if(opts.indexOf(modes) != -1){
                opts.indexOf(modes) == 0 && acs()
                opts.indexOf(modes) == 1 && dec()
            }else{
                sadThrow(`Error In SortBySize: arg ${modes} is not recognize, only asc and dec`)
            }
        }
        
        return this
    }
    // done
    sortByDateCreated(){

    }
    sortByDateModified(){

    }
    groupByType(){
        currentTypes = []
    }
    groupByMonth(){

    }
    groupByYear(){

    }
    done(){
        return this.response
    }
}


module.exports = sy