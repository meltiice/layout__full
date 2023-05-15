let maskOptions = {
   mask: '+7(000)000-00-00',
   lazy: true
} 
let maskOptions2 = {    
   mask:function (value) {
               if(/^[a-z0-9_\.-]+$/.test(value))
                   return true;
               if(/^[a-z0-9_\.-]+@$/.test(value))
                   return true;
               if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
                   return true;
               if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
                   return true;
               if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
                   return true;
               if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
                   return true;
               if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
                   return true;
               return false;
                   },
   lazy: true
} 
export {maskOptions, maskOptions2};