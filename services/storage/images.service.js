import { randomUUID } from 'expo-crypto'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../firebase/firebase.config'

async function uploadImageAsync(path, uri) {
  const blob = await new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      resolve(xhr.response)
    }
    xhr.onerror = function (e) {
      console.log(e)
      reject(new TypeError('Network request failed'))
    }
    xhr.responseType = 'blob'
    xhr.open('GET', uri, true)
    xhr.send(null)
  })

  const pathname = path + '/' + randomUUID()
  const fileRef = ref(storage, pathname)
  await uploadBytes(fileRef, blob)

  blob.close()

  return await getDownloadURL(fileRef)
}

export { uploadImageAsync }
