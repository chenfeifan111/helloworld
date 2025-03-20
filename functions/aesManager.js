import CryptoJS from 'crypto-js';
import { encode, decode } from 'js-base64';

const CRYPTOJSKEY = "4I0wrCt6pTJXjdLm";
const iv = "5481649756531687";

export const AesManager = {
    encrypt(data) {
        const json_str = JSON.stringify(data);
        const plaintText = encode(json_str);
        const options = {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        };
        const key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY);
        return CryptoJS.AES.encrypt(plaintText, key, options).toString();
    },

    decrypt(encryptedBase64Str) {
        const options = {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        };
        const key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY);
        const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, options);
        return JSON.parse(decode(decryptedData.toString(CryptoJS.enc.Utf8)));
    }
};