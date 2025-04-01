import * as CryptoJS from "crypto-js";
import * as Base64 from "js-base64";

const CRYPTOJSKEY = "4I0wrCt6pTJXjdLm";
const iv = "5481649756531687";

export class AesManager {
    /**
     * @description 加密函数
     * @param {str} data 加密明文
     * @returns {str} 加密结果
     */
    static encrypt(data) {
        let json_str = JSON.stringify(data);
        let plaintText = Base64.encode(json_str);
        let options = {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        };
        let key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY);
        let encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
        let encryptedBase64Str = encryptedData.toString();
        return encryptedBase64Str;
    }

    /**
     * @description 解密函数
     * @param {str} encryptedBase64Str 密文
     * @returns {any} 解密结果
     */
    static decrypt(encryptedBase64Str) {
        let options = {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        };
        let key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY);
        let decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, options);
        // 解密后，需要按照Utf8的方式将明文转位字符串
        let decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
        let json_str = Base64.decode(decryptedStr);
        return JSON.parse(json_str);
    }
}
