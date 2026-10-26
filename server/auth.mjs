import {scrypt,randomBytes,createHash,timingSafeEqual} from 'node:crypto';
import {Buffer} from 'node:buffer';
export class ApiError extends Error{constructor(status,message,code){super(message);this.status=status;this.code=code;}}
export const digest=value=>createHash('sha256').update(value).digest('hex');
export const token=()=>randomBytes(32).toString('base64url');
export const recoveryCode=()=>randomBytes(20).toString('hex').match(/.{1,8}/g).join('-');
const params={N:32768,r:8,p:3,maxmem:64*1024*1024};
let deriving=false;
async function derive(password,salt){
 if(deriving)throw new ApiError(429,'Há outra autenticação em andamento. Aguarde alguns segundos e tente novamente.');
 deriving=true;try{return await new Promise((resolve,reject)=>scrypt(password,salt,64,params,(error,key)=>error?reject(error):resolve(key)));}finally{deriving=false;}
}
export function validatePassword(password){if(typeof password!=='string'||[...password].length<8||[...password].length>128||/[\x00-\x1f\x7f]/.test(password))throw new ApiError(400,'Use uma senha de 8 a 128 caracteres. Frases-senha e espaços são aceitos.');}
export async function hashPassword(password){validatePassword(password);const salt=randomBytes(16).toString('base64url');const hash=await derive(password,salt);return JSON.stringify({v:1,algorithm:'scrypt',N:32768,r:8,p:3,salt,hash:hash.toString('base64url')});}
export async function verifyPassword(password,encoded){
 if(typeof password!=='string'||[...password].length>128)return false;
 let stored;try{stored=JSON.parse(encoded);}catch{stored=null;}
 const valid=stored?.v===1&&stored.algorithm==='scrypt'&&stored.N===32768&&stored.r===8&&stored.p===3&&typeof stored.salt==='string'&&stored.salt.length<=64;
 const candidate=await derive(password,valid?stored.salt:'forge-dummy-salt-v1');
 const expected=valid?Buffer.from(stored.hash,'base64url'):Buffer.alloc(64);
 return valid&&expected.length===candidate.length&&timingSafeEqual(expected,candidate);
}
export function loginName(value){if(typeof value!=='string')throw new ApiError(400,'Informe seu usuário.');const s=value.trim().toLowerCase();if(!/^[a-z0-9][a-z0-9_.-]{2,31}$/.test(s))throw new ApiError(400,'O usuário deve ter de 3 a 32 letras sem acento, números, ponto, hífen ou sublinhado.');return s;}
export function displayName(value){if(typeof value!=='string'||!value.trim()||value.trim().length>32||/[\x00-\x1f\x7f]/.test(value))throw new ApiError(400,'Escolha um nome de exibição de até 32 caracteres.');return value.trim();}
export function cookieName(request){return new URL(request.url).protocol==='https:'?'__Host-forge_session':'forge_session_dev';}
export function sessionCookie(request,value,maxAge){const secure=new URL(request.url).protocol==='https:';return`${cookieName(request)}=${value}; Path=/; HttpOnly; SameSite=Lax${secure?'; Secure':''}${maxAge!==undefined?'; Max-Age='+maxAge:''}`;}
export function readCookie(request){const name=cookieName(request);return(request.headers.get('cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(name+'='))?.slice(name.length+1)||'';}
