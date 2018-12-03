# Table of contents

* Methods	
    * [cd](#cd)
    * [cp](#cp)
    * [ls](#ls)
    * [mkdir](#mkdir)
    * [mv](#mv)
    * [rm](#rm)
    * [touch](#touch)
* Chaining
    * [Chaining methods](#chaining)
* Sorting
    * [SortyByName]()
    * [SortByType]()

# cd(path)
**change directory** : sets directory to path

* path : string
* Returns : boolean

```js
// init
const fileSystem = require('dqfs')
const fs = new fileSystem

fs.cd('dir/dir')
```
A **ValError** is thrown if path is undefined

# cp(frm,to)
**copy** : copy a directory or a file

# ls(path,[opts])