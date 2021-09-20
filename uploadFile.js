const fs = require('fs');
const { fromBuffer } = require('file-type')
const __path = process.cwd()
const FormData = require("form-data")
const axios = require('axios')
const tmp = __path+'/tmp/file__tmp'

async function uploadFile(buffer) {
const cek_file = await fromBuffer(buffer)
fs.writeFileSync(tmp+`.${cek_file.ext}`)
	const bodyForm = new FormData();
	bodyForm.append('recfile', fs.createReadStream(tmp+`.${cek_file.ext}`))
	await axios(`https://uploader.hardianto.xyz/upload`,{
		method: 'POST',
		data: bodyForm,
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
		}
	}).then(({ data }) => {
        console.log(data)
	return data
})
}

async function uploadFileFromPath(path) {
        const bodyForm = new FormData();
        bodyForm.append('recfile', fs.createReadStream(path))
        await axios(`https://uploader.hardianto.xyz/upload`,{
            method: 'POST',
            data: bodyForm,
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
            }
        }).then(({ data }) => {
            console.log(data)
        return data
    })
    }
module.exports = {uploadFile, uploadFileFromPath}