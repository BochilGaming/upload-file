# usage
```js
const { uploadFile, uploadFileFromPath } = require('uploadFile')
const fs = require('fs')

for input buffer
const buffer = fs.readFileSync('./logo.png.png')
uploadFile(buffer)
.then(json => {
    console.log(json)
})

for input path
uploadFileFromPath('./logo.png.png')
.then(json => {
    console.log(json)
})
```

# return
```js
{
  status: 200,
  creator: '@hardianto02_',
  message: 'successfull uploaded file',
  file: 'https://uploader.hardianto.xyz/uploads/recfile-1632143083234.png'
}
```
